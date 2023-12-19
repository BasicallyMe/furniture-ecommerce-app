import { useContext } from "react";
import { UserContext } from "../(context)/UserContext";

export default function useUpdateCart() {
    const { setCart } = useContext(UserContext);

    const updateCart = (items) => {
        setCart(items);
    };

    return { updateCart };
}