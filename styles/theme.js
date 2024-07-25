"use client";
import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: [
      "Work Sans",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#3C1992",
    },
    secondary: {
      main: "#00D278",
    },
  },
});
export default theme;
