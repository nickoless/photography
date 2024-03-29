import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@/styles/globalStyle';
import { AnimatePresence } from 'framer-motion';

const myFont = localFont({
    src: [
        {
            path: '../public/fonts/NeueMontreal-Book.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/NeueMontreal-Medium.otf',
            weight: '600',
        },
        {
            path: '../public/fonts/NeueMontreal-Bold.otf',
            weight: '800',
            style: 'normal',
        },
    ],
    fallback: ['Sans-serif'],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <AnimatePresence>
                <GlobalStyle />
                <Head>
                    <title>Nick Lee | Photography</title>
                    <meta
                        name='description'
                        content='Montreal based photographer. A collection of personal photographs. Open to collaboration and any other opportunities.'
                    />
                </Head>
                <main key={'main'} className={myFont.className}>
                    <Component {...pageProps} />
                </main>
            </AnimatePresence>
        </ThemeProvider>
    );
}
