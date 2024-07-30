import { cookies } from "next/headers";
const dictionaries = {
  en: async () =>
    await import("../translations/en.json").then((module) => module.default),
  pl: async () =>
    await import("../translations/pl.json").then((module) => module.default),
  "/business": {
    en: async () =>
      await import("../translations/business/en.json").then(
        (module) => module.default
      ),
    pl: async () =>
      await import("../translations/business/pl.json").then(
        (module) => module.default
      ),
  },
  "/contact": {
    en: async () =>
      await import("../translations/contact/en.json").then(
        (module) => module.default
      ),
    pl: async () =>
      await import("../translations/contact/pl.json").then(
        (module) => module.default
      ),
  },
  "/": {
    en: async () =>
      await import("../translations/home/en.json").then(
        (module) => module.default
      ),
    pl: async () =>
      await import("../translations/home/pl.json").then(
        (module) => module.default
      ),
  },
};
async function loadDictionaries(lang, path) {
  let main = await dictionaries[lang]();
  if (!path) return { general: main };
  let page = await dictionaries[path][lang]();
  return { general: main, ...page };
}
export default async function getDictionary(path) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang") || { value: "pl" };
  console.debug("lang", lang.value);
  return { dictionary: await loadDictionaries(lang.value, path), lang: lang };
}
