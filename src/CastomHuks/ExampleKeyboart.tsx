import React from 'react';
import { View, Text, TextInput } from 'react-native';
import useKeyboard from './useKeyboard';

const MySwitcherKeyboard = () => {
    const { keyboardVisible, keyboardHeight } = useKeyboard();

    return (
        <View>
            <TextInput style={{borderWidth:1,width:290,padding:6,marginBottom:10}}  placeholder="Type here" />
            {keyboardVisible && (
                <View>
                    <Text>Keyboard is open</Text>
                    <Text>Keyboard height: {keyboardHeight}</Text>
                </View>
            )}
        </View>
    );
};

export default MySwitcherKeyboard;
