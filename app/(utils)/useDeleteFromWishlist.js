/**
 * Custom hook that allows updating the cart in the UserContext state and localStorage.
 * Uses the setCart method from UserContext to update the cart state.
 * Accepts the updated cart items array and updates both context state and localStorage.
 */
import { useContext } from "react";
import { UserContext } from "../(context)/UserContext";

export default function useDeleteFromWishlist() {
  const { wishlistState } = useContext(UserContext);
  const [wishlist, setWishlist] = wishlistState;

  const deleteFromWishlist = (id) => {
    const updatedItems = wishlist.filter((item) => item._id !== id);
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));
    setWishlist(() => 
      updatedItems
    )
  };

  return [deleteFromWishlist];
}
