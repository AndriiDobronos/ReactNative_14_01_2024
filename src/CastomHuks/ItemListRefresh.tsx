import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, RefreshControl } from 'react-native';
import axios from 'axios';
import useRefresh from './useRefresh';

const ItemListRefresh = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const url =  'https://jsonplaceholder.typicode.com/todos/1';// 'https://api.example.com/data';

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            setError(null);
            setIsLoading(true)
        } catch (error) {
            setError('Error fetching data');
        }
    };

    // Використовуємо кастомний хук useRefresh
    const { isRefreshing, onRefresh } = useRefresh(fetchData);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{flex:0.6,borderWidth:1,borderColor:"red",width:290}} >
            {!isLoading && <Text >Loading</Text>}
            {data && <View><Text>data:{JSON.stringify(data)}</Text></View>}
            <FlatList
                data={data}
                renderItem={({item}) => <Text style={{height:30,}}>"Item:"{item}</Text>}
                keyExtractor={(item) => item.id.toString()}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
            {error && <Text>{error}</Text>}
        </View>
    );
};

export default ItemListRefresh;
