/**
 * Custom hook that allows updating the cart in the UserContext state and localStorage.
 * Uses the setCart method from UserContext to update the cart state.
 * Accepts the updated cart items array and updates both context state and localStorage.
 */
import { useContext } from "react";
import { UserContext } from "../(context)/UserContext";

export default function useUpdateCart() {
    const { cartState } = useContext(UserContext);
    const [cart, setCart] = cartState;

  const updateCart = (items) => {
    setCart(items);
    localStorage.setItem("cart", JSON.stringify(items));
  };

  return { updateCart };
}
