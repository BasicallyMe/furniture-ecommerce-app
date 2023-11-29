import React from "react";
import Link from "next/link";
import { ShoppingCart, User2 } from "lucide-react";

function Navigation(props) {
  const { renderOptions = true } = props;
  return (
    <nav className="flex flex-row justify-between py-3 px-3">
      <div>
        <Link href="/" className="font-semibold text-2xl">Furnituro</Link>
      </div>
      <ul className="flex flex-row items-center justify-end m-0">
        {renderOptions && (
          <>
            <li className="mr-2 px-2 relative">
              <Link href="/cart">
                {/* <div className="-top-1 right-0 rounded-full bg-blue-500 text-white h-5 w-5 text-xs absolute flex items-center justify-center">7+</div> */}
                <ShoppingCart size={25} strokeWidth={1} />
              </Link>
            </li>
            <li className="px-2">
              <Link href="/auth/signin" className="text-sm font-medium">Sign Up / Sign In</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
