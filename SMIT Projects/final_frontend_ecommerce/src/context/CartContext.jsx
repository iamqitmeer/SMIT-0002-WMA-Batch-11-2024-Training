import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();

export let CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const getItemFromLocalStorage = localStorage.getItem("cart");
    if (getItemFromLocalStorage) {
      return JSON.parse(getItemFromLocalStorage);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
