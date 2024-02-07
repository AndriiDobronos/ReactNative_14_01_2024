import { useState, useCallback } from 'react';

const useRefresh = (refreshCallback) => {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const onRefresh = useCallback(async () => {
        try {
            setIsRefreshing(true);
            await refreshCallback();
        } finally {
            setIsRefreshing(false);
        }
    }, [refreshCallback]);

    return {
        isRefreshing,
        onRefresh,
    };
};
export default useRefresh;
