import { createContext } from "react";

export let UserContext = createContext();

export let UserContextProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};
