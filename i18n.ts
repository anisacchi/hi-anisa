import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./public/locale/${locale}.json`)).default
}));
