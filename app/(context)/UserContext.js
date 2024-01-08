import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

function updateLocalStorage(data, action) {
  localStorage.setItem(action, JSON.stringify(data));
}

export const UserContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      if (cart.length > 0) {
        updateLocalStorage(cart, "cart");
      } else {
        if (JSON.parse(localStorage.getItem("cart")).length > 0) {
          setCart(JSON.parse(localStorage.getItem("cart")));
        }
      }
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    if (localStorage.getItem("wishlist")) {
      if (wishlist.length > 0) {
        updateLocalStorage(wishlist, "wishlist");
      } else {
        if (JSON.parse(localStorage.getItem("wishlist")).length > 0) {
          setWishlist(JSON.parse(localStorage.getItem("wishlist")));
        }
      }
    } else {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  }, [wishlist]);

  return (
    <UserContext.Provider
      value={{
        cartState: [cart, setCart],
        wishlistState: [wishlist, setWishlist],
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
