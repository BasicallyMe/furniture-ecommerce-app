/**
 * Custom hook to add an item to the wishlist.
 *
 * Uses the UserContext to access the wishlist state and update it.
 * Checks if item already exists before adding to prevent duplicates.
 * Updates localStorage to persist wishlist changes.
 */
import { useContext } from "react";
import { UserContext } from "../(context)/UserContext";

export default function useAddToWishlist() {
  const { wishlistState } = useContext(UserContext);
  const [wishlist, setWishlist] = wishlistState;

  const addItemToWishlist = (itemToWishlist) => {
    const existingItem = wishlist.find((item) => item.id === itemToWishlist.id);

    if (existingItem) {
      console.log("item already in wishlist", existingItem);
    } else {
      setWishlist((prevWishlist) => {
        const updatedWishlist = [...prevWishlist, itemToWishlist];
        return updatedWishlist;
      });
    }
  };

  return [addItemToWishlist];
}
