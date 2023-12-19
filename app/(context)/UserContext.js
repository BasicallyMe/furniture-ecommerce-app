import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
//   const [userData, setUserData] = useState({ cart: [], wishlist: [] });
  const [cart, setCart] = useState([]);

  return (
    <UserContext.Provider value={{ cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
