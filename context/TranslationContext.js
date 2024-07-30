import React, { createContext } from "react";
const TranslationContext = createContext();
export const TranslationContextProvider = ({ children, dictionary, lang }) => {
  return (
    <TranslationContext.Provider value={{ dictionary, lang }}>
      {children}
    </TranslationContext.Provider>
  );
};
export default TranslationContext;
