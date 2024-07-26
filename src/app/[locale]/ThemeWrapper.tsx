'use client';

import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@/styles/globalStyle';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
}
