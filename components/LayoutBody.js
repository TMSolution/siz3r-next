"use client";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme.js";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { SystemContextProvider } from "@/context/SystemContext.js";
import { TranslationContextProvider } from "@/context/TranslationContext";
import Header from "./Header.js";
import { Box, useMediaQuery } from "@mui/material";
import Footer from "./Footer.js";
import { useRouter } from "next/router.js";
const inter = Inter({ subsets: ["latin"] });

export default function LayoutBody({ children, dictionary, pathname, lang }) {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      component="body"
      className={inter.className}
      sx={{
        background: "black",
        margin: { xs: "0 24px 0 24px", md: "0 10% 0 10%" },
        width: { xs: "calc(100% - 48px)", md: "80%" },
      }}>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <SystemContextProvider theme={theme} pathname={pathname}>
          <TranslationContextProvider dictionary={dictionary} lang={lang}>
            <ThemeProvider theme={theme}>
              <Header />
              {children}
              <Footer isMobile={isMobile} />
            </ThemeProvider>
          </TranslationContextProvider>
        </SystemContextProvider>
      </AppRouterCacheProvider>
    </Box>
  );
}
