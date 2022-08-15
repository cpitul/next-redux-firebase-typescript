import { authFE } from '@app/firebase/firebaseClient';
import { setAuthIsLogged, updateAuthUser } from '@redux/auth/authSlice';
import { browserSessionPersistence, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

import { useDispatch } from '@app/hooks';

import { useLocaleI18n } from '@utils/language/funcs';
import { parseUserCredential } from '@utils/parsers';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	useLocaleI18n();

	const dispatch = useDispatch();

	useEffect(() => {
		const unsub = onAuthStateChanged(authFE(), user => {
			if (user) {
				const userInfo = parseUserCredential(user);

				console.log('Logged user back in');

				authFE().setPersistence(browserSessionPersistence);
				dispatch(setAuthIsLogged(true));
				dispatch(updateAuthUser(userInfo));

				return;
			}

			console.log('no user found');
		});

		return () => unsub();
	}, []);

	return <main>{children}</main>;
};

export default Layout;
