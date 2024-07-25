"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme.js";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { SystemContextProvider } from "@/context/SystemContext.js";
import { TranslationContextProvider } from "@/context/TranslationContext";
const inter = Inter({ subsets: ["latin"] });

export default function LayoutBody({ children, dictionary }) {
  return (
    <body
      className={inter.className}
      style={{ background: theme.palette.background.default }}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <SystemContextProvider theme={theme}>
          <TranslationContextProvider dictionary={dictionary}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </TranslationContextProvider>
        </SystemContextProvider>
      </AppRouterCacheProvider>
    </body>
  );
}
