import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboard = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addEventListener(
            'keyboardDidShow',
            (event) => {
                setKeyboardVisible(true);
                setKeyboardHeight(event.endCoordinates.height);
            }
        );

        const keyboardDidHideListener = Keyboard.addEventListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
                setKeyboardHeight(0);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    return {
        keyboardVisible,
        keyboardHeight,
    };
};

export default useKeyboard;
