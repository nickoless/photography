import { hasCookie, setCookie } from 'cookies-next';

const getToken = async () => {
    if (hasCookie('sirv_token')) return;

    const body = {
        clientId: process.env.NEXT_PUBLIC_SIRV_ID,
        clientSecret: process.env.NEXT_PUBLIC_SIRV_KEY,
    };

    const response = await fetch('https://api.sirv.com/v2/token', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) throw new Error(`An error has occurred: ${response.status}`);

    const data = await response.json();
    setCookie('sirv_token', data.token, { maxAge: data.expiresIn });
};

export default getToken;
