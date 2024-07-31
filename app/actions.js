"use server";

import { cookies } from "next/headers";

export async function changeLanguage(lang) {
  return new Promise((resolve) => {
    cookies().delete("lang");
    console.debug("Setting language to " + lang);
    cookies().set({
      name: "lang",
      value: lang,
      httpOnly: false,
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365), // 1 year
    });
    resolve();
  });
}
