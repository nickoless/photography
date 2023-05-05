import { getCookie, hasCookie, setCookie } from 'cookies-next';
import { useEffect, useState } from 'react';

const useGetPhotos = (category: string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const validToken = hasCookie('sirv_token');
    const body = {
        clientId: process.env.NEXT_PUBLIC_SIRV_ID,
        clientSecret: process.env.NEXT_PUBLIC_SIRV_KEY,
    };

    useEffect(() => {
        (async () => {
            // Get JWT from Sirv (skip if one already exists)
            if (!validToken) {
                await fetch('https://api.sirv.com/v2/token', {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((res) => res.json())
                    .then((res) => setCookie('sirv_token', res.token, { maxAge: res.expiresIn }));
            }

            // Get photo data based on specified page
            await fetch(
                `https://api.sirv.com/v2/files/readdir?dirname=${encodeURI(`/images/${category}`)}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${getCookie('sirv_token')}`,
                    },
                }
            )
                .then((res) => res.json())
                .then((res) => {
                    const newDataMap = res?.contents.map((image) => {
                        return {
                            src: `https://iumpottl.sirv.com/images/${category}/${image.filename}`,
                            width: image.meta.width,
                            height: image.meta.height,
                        };
                    });

                    setError(res.error);
                    setData(newDataMap);
                    setLoading(false);
                });
        })();
    }, []);

    return { data, loading, error };
};

export default useGetPhotos;
