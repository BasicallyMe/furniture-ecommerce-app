"use client";
import React, { useContext } from "react";
import { UserContext } from "../(context)/UserContext";
import Link from "next/link";
import { ShoppingCart, User2, Heart } from "lucide-react";

function Navigation(props) {
  const { renderOptions = true } = props;
  const { cartState } = useContext(UserContext);
  const [cart, setCart] = cartState;
  return (
    <nav className="flex flex-row justify-between py-3 px-6">
      <div>
        <Link href="/" className="font-semibold text-2xl">
          Furnituro
        </Link>
      </div>
      <ul className="flex flex-row items-center justify-end m-0">
        {renderOptions && (
          <>
            <li className="mr-2 px-2 relative text-blue-500">
              <Link href="/wishlist">
                <Heart size={20} strokeWidth={1.25} />
              </Link>
            </li>
            <li className="mr-2 px-2 relative text-blue-500">
              <Link href="/cart">
                {cart.length !== 0 && (
                  <div className="-top-1 right-1 rounded-full bg-blue-500 text-white h-1 w-1 text-xs absolute" />
                )}
                <ShoppingCart size={21} strokeWidth={1} />
              </Link>
            </li>
            <li className="px-2">
              <Link
                href="/auth/signin"
                className="text-sm font-medium text-blue-500"
              >
                Sign Up / Sign In
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
