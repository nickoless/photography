import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default createMiddleware({
	// A list of all locales that are supported
	locales: ['en', 'fr'],
	// Used when no locale matches
	defaultLocale: 'en',
});

export const config = {
	// Match only internationalized pathnames
	matcher: ['/', '/(fr|en)/:path*'],
};
