import { useContext, useState } from "react";
import { UserContext } from "../(context)/UserContext";

export default function useAddToCart() {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const { cart, setCart } = useContext(UserContext);

  const addItemToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      console.log('item is already added to cart');
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  return [isItemAdded, addItemToCart];
}