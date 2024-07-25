import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import myFont from '@/public/fonts/NeueMontreal';
import ThemeWrapper from './theme-wrapper';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	// Receive messages provided in `i18n.ts`
	const messages = await getMessages();

	return (
		<html lang='en' className={myFont.className}>
			<body>
				{/* Layout UI */}
				<main>
					<ThemeWrapper>
						<NextIntlClientProvider messages={messages}>
							{children}
						</NextIntlClientProvider>
					</ThemeWrapper>
				</main>
			</body>
		</html>
	);
}
