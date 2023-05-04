import { getCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

const useGetPhotos = (category: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const token = getCookie('sirv_token');

    useEffect(() => {
        if (!token) return;

        fetch(`https://api.sirv.com/v2/files/readdir?dirname=${encodeURI(`/images/${category}`)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setError(data.error);
                setData(data.contents);
                setLoading(false);
            });
    }, [category, token]);

    return { data, loading, error };
};

export default useGetPhotos;
