import { cookies } from "next/headers";
const dictionaries = {
  en: async () =>
    await import("../translations/en.json").then((module) => module.default),
  pl: async () =>
    await import("../translations/pl.json").then((module) => module.default),
};
async function loadDictionaries(lang) {
  let main = await dictionaries[lang]();
  return main;
}
export default async function getDictionary(path) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang") || { value: "pl" };
  console.debug("lang", lang.value);
  return { dictionary: await loadDictionaries(lang.value, path), lang: lang };
}
