import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  //   const [userData, setUserData] = useState({ cart: [], wishlist: [] });
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      if (JSON.parse(localStorage.getItem("cart")).length > 0) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, []);

  return (
    <UserContext.Provider value={{ cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
