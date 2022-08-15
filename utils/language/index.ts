import { Langs } from '@utils/declarations/enums';
import { defaultLanguage } from '@utils/misc';
import { english } from './files/english';

export { Lang };
export const availableLanguages: Langs[] = [Langs.en];

class Lang {
	// LANGS
	private [Langs.en] = english;

	public selectedLang: Langs = Langs.en;
	public lang: typeof english = this[defaultLanguage];

	constructor(lang?: Langs) {
		if (!lang || !availableLanguages.includes(lang)) {
			this.lang = this[defaultLanguage];
			return;
		}

		if (lang && lang !== defaultLanguage) {
			this.selectedLang = lang;
			this.lang = this[lang];
		}
	}

	set(lang: Langs) {
		if (!availableLanguages.includes(lang)) {
			this.lang = this[defaultLanguage];
			return;
		}

		this.lang = this[lang];
	}
}
