import React, { createContext } from "react";
const TranslationContext = createContext();
export const TranslationContextProvider = ({ children, dictionary }) => {
  return (
    <TranslationContext.Provider value={{ dictionary }}>
      {children}
    </TranslationContext.Provider>
  );
};
export default TranslationContext;
