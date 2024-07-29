"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme.js";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { SystemContextProvider } from "@/context/SystemContext.js";
import { TranslationContextProvider } from "@/context/TranslationContext";
import Header from "./Header.js";
import { useMediaQuery } from "@mui/material";
import Footer from "./Footer.js";
const inter = Inter({ subsets: ["latin"] });

export default function LayoutBody({ children, dictionary }) {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <body
      className={inter.className}
      style={{
        background: "black",
        margin: isMobile ? "0 24px 0 24px" : "0 10% 0 10%",
        width: isMobile ? "calc(100% - 48px)" : "80%",
      }}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <SystemContextProvider theme={theme}>
          <TranslationContextProvider dictionary={dictionary}>
            <ThemeProvider theme={theme}>
              <Header />
              {children}
              <Footer isMobile={isMobile} />
            </ThemeProvider>
          </TranslationContextProvider>
        </SystemContextProvider>
      </AppRouterCacheProvider>
    </body>
  );
}
