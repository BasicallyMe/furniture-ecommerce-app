import { useContext } from "react";
import { UserContext } from "../(context)/UserContext";

export default function useGetCart() {
      const { cartState } = useContext(UserContext);
      const [cart, setCart] = cartState;

    return { cart }
}