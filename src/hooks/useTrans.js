import { useRouter } from "next/router";
import en from "../lang/en.json";
import vi from "../lang/vi.json";

const useTrans = (locale, locales) => {
  const langs = { en, vi };
  const router = useRouter();

  const trans = (key, placeholders = {}) => {
    if (locales.includes(locale)) {
      const lang = langs[locale];
      if (lang[key] !== undefined) {
        let translated = lang[key];
        Object.entries(placeholders).forEach(([key, value]) => {
          translated = translated.replace(":" + key + ":", value);
        });

        return translated;
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
