"use server";

import { cookies } from "next/headers";

export async function changeLanguage(lang) {
  return new Promise((resolve) => {
    //cookies().set("lang", lang);
    console.debug("Setting language to " + lang);
    cookies().set({
      name: "lang",
      value: lang,
      httpOnly: false,
      path: "/",
    });
    resolve();
  });
}
