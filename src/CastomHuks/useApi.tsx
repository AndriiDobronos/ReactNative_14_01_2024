import { useState, useEffect } from 'react';

const useApi = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(url, { signal });
            const result = await response.json();

            setData(result);
            setError(null);
        } catch (err) {
            if (err.name === 'AbortError') {
                console.log('****Request was aborted');
            } else {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {

        fetchData();

        return () => {
            abortController.abort();
        };
    }, [url]);

    return {
        data,
        error,
        isLoading,
        refetch:() => fetchData()
    };
};

export default useApi;
