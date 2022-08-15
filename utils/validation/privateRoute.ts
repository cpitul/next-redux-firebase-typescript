import { useRouter } from 'next/router';

import { useSelector } from '@app/hooks';
import { URLS } from '@utils/declarations/enums';
import { useEffect } from 'react';

interface Props {
	whenIsLoggedIs: boolean;
	redirect?: URLS;
	disabled?: boolean;
}

export const privateRoute = ({ whenIsLoggedIs, disabled, redirect }: Props) => {
	if (typeof window !== 'undefined') {
		const isLogged = useSelector(state => state.auth?.isLogged);
		const { push } = useRouter();

		useEffect(() => {
			isLogged === whenIsLoggedIs && !disabled && (console.warn('This route is private'), push(redirect ?? URLS.HOME));
		}, [isLogged, disabled, whenIsLoggedIs]);
	}
};
