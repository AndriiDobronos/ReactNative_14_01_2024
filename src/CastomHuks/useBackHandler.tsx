import { useEffect } from 'react';
import {Alert, BackHandler} from 'react-native';

const useBackHandler = (callback) => {
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Hold on!', 'Are you sure you want to go back?', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
                {text: 'YES', onPress: () => BackHandler.exitApp()},
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, [callback]);
};

export default useBackHandler;
