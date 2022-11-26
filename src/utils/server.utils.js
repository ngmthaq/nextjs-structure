import en from "../lang/en.json";
import vi from "../lang/vi.json";

export const getFullUrl = (context) => {
  return process.env.APP_URL + "/" + context.locale + context.req.url;
};

export const trans = (context, key, placeholders = {}) => {
  const locale = context.locale;
  const locales = context.locales;
  const langs = { en, vi };

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
