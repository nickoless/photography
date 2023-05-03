import localFont from "next/font/local";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";

import { GlobalStyle, theme } from "@/styles/globalStyle";

const myFont = localFont({
    src: [
        {
            path: "../public/fonts/NeueMontreal-Book.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/NeueMontreal-Medium.otf",
            weight: "600",
        },
        {
            path: "../public/fonts/NeueMontreal-Bold.otf",
            weight: "800",
            style: "normal",
        },
    ],
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <main className={myFont.className}>
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    );
}
