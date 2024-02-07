import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

const useOrientation = () => {

    const getInitialOrientation = () => {
        const { width, height } = Dimensions.get('window');
        return width > height ? 'landscape' : 'portrait';
    };

    const [orientation, setOrientation] = useState<string>(
        getInitialOrientation()
    );

    useEffect(() => {
        const handleOrientationChange = ({ window }: { window: ScaledSize }) => {
            const newOrientation = window.width > window.height ? 'landscape' : 'portrait';
            setOrientation(newOrientation);
        };

        Dimensions.addEventListener('change', handleOrientationChange)
         return () => Dimensions.remove();
        //return () => Dimensions.removeEventListener('change', handleOrientationChange);
    }, []);

    return orientation;
};

export default useOrientation;
