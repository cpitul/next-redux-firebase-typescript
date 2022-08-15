import { useDispatch, useSelector } from '@app/hooks';
import { setAppLang } from '@redux/app/appSlice';
import store from '@redux/store';
import { Langs, LS } from '@utils/declarations/enums';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Lang } from '.';

export function getLang() {
	const appLang =
		typeof window !== 'undefined' && store
			? // eslint-disable-next-line react-hooks/rules-of-hooks
			  (localStorage?.getItem(LS.LANG) as Langs) ?? useSelector(state => state.app.lang)
			: Langs.en;

	const { lang } = new Lang(appLang);
	return lang;
}

export function useLocaleI18n() {
	const { locale } = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		switch (locale) {
			case Langs.en: {
				dispatch(setAppLang(Langs.en));
				break;
			}
			default: {
				dispatch(setAppLang(Langs.en));
				break;
			}
		}
	}, []);
}
