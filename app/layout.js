import "./globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LayoutBody from "@/components/LayoutBody.js";
import getDictionary from "@/components/dictionary";

import { pathname } from "next-extra/pathname";

export const metadata = {
  title: "Boilerplate app",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  console.debug("deviceType", deviceType);
  const path = pathname();

  let { dictionary, lang } = await getDictionary(path);
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <LayoutBody dictionary={dictionary} lang={lang.value} pathname={path}>
        {children}
      </LayoutBody>
    </html>
  );
}
