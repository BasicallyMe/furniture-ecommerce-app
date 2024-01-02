import { useContext } from "react";
import { UserContext } from "../(context)/UserContext";

export default function useGetCart() {
    const { cart } = useContext(UserContext);

    const getCart = () => {}

    return { getCart, cart }
}