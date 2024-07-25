'use client';

import { AppProps } from 'next/app';
import localFont from 'next/font/local';
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

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider theme={theme}>
			<AnimatePresence>
				<GlobalStyle />
				{children}
			</AnimatePresence>
		</ThemeProvider>
	);
}
