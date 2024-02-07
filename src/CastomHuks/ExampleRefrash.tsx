import React, { useState } from 'react';
import { View, Button, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';
import useRefresh from './useRefresh';

const MyRefreshComponent = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.example.com/data');
            setData(response.data);
            setError(null);
        } catch (error) {
            setError('Error fetching data');
        }
    };

    const { isRefreshing, onRefresh } = useRefresh(fetchData);

    return (
        <View>
            <Button title="Refresh" onPress={onRefresh} />
            {isRefreshing && <ActivityIndicator size="large" color="#0000ff" />}
            {error && <Text>{error}</Text>}
            {data && (
                <View>
                    <Text>Data:</Text>
                    <Text>{JSON.stringify(data)}</Text>
                </View>
            )}
        </View>
    );
};

export default MyRefreshComponent;
