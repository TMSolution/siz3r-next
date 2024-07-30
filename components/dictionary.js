import { cookies } from "next/headers";
const dictionaries = {
  en: () => async () =>
    await import("../translations/en.json").then((module) => module.default),
  pl: async () =>
    await import("../translations/pl.json").then((module) => module.default),
};

export default async function getDictionary() {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang") || "pl";
  return dictionaries[lang]
    ? { dictionary: await dictionaries[lang](), lang }
    : { dictionary: await dictionaries["pl"](), lang };
}
