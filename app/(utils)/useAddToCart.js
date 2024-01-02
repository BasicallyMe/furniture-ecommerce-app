/**
 * Custom hook to handle adding items to the cart.
 *
 * Uses the UserContext to access the cart state and update it when adding new items.
 * Handles checking if item already exists and updating quantity if so.
 * Returns isItemAdded state and addItemToCart function to call from components.
 */
import { useContext, useState } from "react";
import { UserContext } from "../(context)/UserContext";

export default function useAddToCart() {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { cart, setCart } = useContext(UserContext);

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const addItemToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, throw an error
      // throw new Error('Item already exists in cart');
      const updatedCart = cart.map((cartItem) => {
        if (cartItem?.id === item?.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + item.quantity,
          };
        }
        return cartItem;
      });
      setCart((prevCart) => {
        return updatedCart;
      });
      updateLocalStorage(updatedCart);
    } else {
      /**
       * Updates the cart state by concatenating the previous cart with the new item.
       * Also updates localStorage to persist the updated cart.
       */
      setCart((prevCart) => {
        const updatedCart = [...prevCart, item];
        updateLocalStorage(updatedCart);
        return updatedCart;
      });
    }
  };

  return [isItemAdded, addItemToCart];
}
