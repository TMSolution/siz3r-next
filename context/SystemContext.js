"use client";
import { useMediaQuery } from "@mui/material";
import React, { createContext } from "react";

const SystemContext = createContext();

export const SystemContextProvider = (props) => {
  const isMobile = useMediaQuery(props.theme.breakpoints.up("sm"));
  return (
    <SystemContext.Provider value={{ isMobile, theme: props.theme }}>
      {props.children}
    </SystemContext.Provider>
  );
};
export default SystemContext;
