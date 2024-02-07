import React from 'react';
import { View, Text, Button } from 'react-native';
import useApi from './useApi';

const MyComponent = () => {
    const apiUrl =   'https://jsonplaceholder.typicode.com/todos/1';//'https://api.example.com/data'; //
    const { data, error, isLoading, refetch } = useApi(apiUrl);
    //console.log("apiUrl:",useApi(apiUrl),"data:",data)

    return (
        <View>
            {isLoading && <Text>Loading...</Text>}
            {error && <Text>Error: {error}</Text>}
            {data && <Text>Data: {JSON.stringify(data)}</Text>}
            <Button title="Refresh" onPress={refetch} />
        </View>
    );
};

export default MyComponent;