/** @type {import('next').NextConfig} */
const { relative, join } = require('path');

module.exports = {
	distDir: `${relative(process.cwd(), __dirname)}.next`,
	reactStrictMode: true,
	cssModules: true,
	env: {
		FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
		FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
		FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
	},
	i18n: {
		locales: ['en-US'],
		defaultLocale: 'en-US',
	},
	images: {
		domains: ['firebasestorage.googleapis.com'],
	},
	sassOptions: {
		includePaths: [join(__dirname, 'src', 'styles')],
	},
	webpack: config => {
		config.resolve = {
			...config.resolve,
			fallback: {
				fs: false,
				path: false,
				os: false,
			},
		};

		return config;
	},
	async redirects() {
		return [
			// {
			// 	source: '/',
			// 	destination: '/dashboard',
			// 	permanent: true,
			// },
			// {
			// 	source: '/dashboard',
			// 	destination: '/',
			// 	permanent: true,
			// },
		];
	},
};
