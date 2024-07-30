"use server";

import { cookies } from "next/headers";

export async function changeLanguage(lang) {
  return new Promise((resolve) => {
    cookies().set("lang", lang);
    resolve();
  });
}
