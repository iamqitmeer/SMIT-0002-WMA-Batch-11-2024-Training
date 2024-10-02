import { createContext } from "react";

export let ThemeContext = createContext();

export let ThemeContextProvider = ({ children }) => {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
