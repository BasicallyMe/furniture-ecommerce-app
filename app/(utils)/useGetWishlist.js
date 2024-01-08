import { useContext } from "react";
import { UserContext } from "../(context)/UserContext";

export default function useGetWishlist() {
    const { wishlistState } = useContext(UserContext);
    const [wishlist, setWishlist] = wishlistState;
    
    return [wishlist];
}