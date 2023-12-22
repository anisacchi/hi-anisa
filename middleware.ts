import createMiddleware from 'next-intl/middleware';
import { localeIds } from './navigation'

export default createMiddleware({
	defaultLocale: 'en',
	locales: localeIds
});

export const config = {
	matcher: ['/', '/(en|id)/:path*']
};