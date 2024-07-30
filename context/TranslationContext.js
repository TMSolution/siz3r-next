import React, { createContext } from "react";
const TranslationContext = createContext();
import { changeLanguage } from "@/app/actions";
export const TranslationContextProvider = ({ children, dictionary, lang }) => {
  return (
    <TranslationContext.Provider value={{ dictionary, lang, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
export default TranslationContext;
