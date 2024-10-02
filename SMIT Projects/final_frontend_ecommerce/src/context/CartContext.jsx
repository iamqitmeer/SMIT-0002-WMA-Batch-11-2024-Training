import { createContext } from "react";

export let CartContext = createContext();

export let CartContextProvider = ({ children }) => {
  return <CartContext.Provider>{children}</CartContext.Provider>;
};
