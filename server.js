const { https } = require('firebase-functions');
const { default: next } = require('next');
const nextConfig = require('./next.config');

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
	dev: isDev,
	conf: nextConfig,
});

const nextjsHandle = server.getRequestHandler();

exports.nextServer = https.onRequest((req, res) =>
	server.prepare().then(() => {
		return nextjsHandle(req, res);
	}),
);