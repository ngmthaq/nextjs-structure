import { useRouter } from "next/router";
import en from "../lang/en.json";
import vi from "../lang/vi.json";

const useTrans = (locale, locales) => {
  const langs = { en, vi };
  const router = useRouter();

  const trans = (key) => {
    if (locales.includes(locale)) {
      const lang = langs[locale];
      if (lang[key] !== undefined) {
        return lang[key];
      }
    }

    return key;
  };

  const changeLocale = (lang) => {
    router.push(router.pathname, router.pathname, { locale: lang });
  };

  return { trans, changeLocale };
};

export default useTrans;
