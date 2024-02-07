import React  from 'react';
import useBackHandler from './useBackHandler';
import {View,Text,StyleSheet} from "react-native";

const MyBackHandler = () => {
    useBackHandler(() => {
        return false;
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Click Back button!</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default MyBackHandler;