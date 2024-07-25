'use client';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@/styles/globalStyle';
import { AnimatePresence } from 'framer-motion';

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
