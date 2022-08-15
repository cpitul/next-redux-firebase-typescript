// import '@app/firebase/firebaseClient';
import '@styles/globals.scss';
import '@styles/mediaQueries.scss';
import '@styles/reset.scss';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import store from '@redux/store';

import Layout from '@components/Layout/Layout';

export default function Boilerplate({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
