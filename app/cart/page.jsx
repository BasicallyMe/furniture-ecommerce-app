"use client";
import Image from "next/image";
import useGetCart from "../(utils)/useGetCart";
import Navigation from "../(components)/Navigation";
import useUpdateCart from "../(utils)/useUpdateCart";

function Cart() {
  const [cart] = useGetCart();
  const { updateCart } = useUpdateCart();

  function increaseQuantity(item) {
    const updatedCart = cart.map((cartItem) => {
      return cartItem?.id === item?.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
    updateCart(updatedCart);
  }

  function decreaseQuantity(item) {
    const updatedCart = cart.map((cartItem) => {
      return cartItem?.id === item?.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
    updateCart(updatedCart);
  }

  function deleteItem(item) {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    updateCart(updatedCart);
  }

  if (cart.length === 0) {
    return (
      <div>
        <Navigation renderOptions={false} />
        <EmptyCart />
      </div>
    );
  }

  return (
    <div>
      <Navigation renderOptions={false} />
      <div>
        <div className="py-3 my-3 px-6">
          <h2 className="text-2xl font-semibold">Your cart</h2>
        </div>
        <div className="flex flex-row">
          <div className="w-3/4 px-4">
            {cart.map((item) => (
              <div
                key={item?.id}
                className="w-full py-2 px-4 mb-2 grid grid-cols-9 items-center"
              >
                <div className="w-24 h-24 relative mr-2 col-span-1">
                  <Image
                    src={item.thumbnail}
                    alt={item.description}
                    fill
                    className="w-full h-full"
                    objectFit="cover"
                  />
                </div>
                <div className="col-span-5 pl-4">
                  <h4 className="font-semibold">{item.name}</h4>
                  <button
                    onClick={() => deleteItem(item)}
                    className="text-xs mr-3 text-red-500 font-medium hover:underline underline-offset-2"
                  >
                    Delete
                  </button>
                  <button className="text-xs text-slate-500 font-medium hover:underline underline-offset-2">
                    Add to wishlist
                  </button>
                </div>
                <div className="col-span-1">
                  <span className="text-sm font-medium">$ {item.price}</span>
                </div>
                <div className="flex flex-row gap-2 items-center col-span-1">
                  <button
                    disabled={item.quantity <= 1}
                    onClick={() => decreaseQuantity(item)}
                    className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center disabled:bg-slate-300"
                  >
                    -
                  </button>
                  <div className="px-1 text-sm font-medium">
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => increaseQuantity(item)}
                    className="w-6 h-6 bg-blue-500 text-white flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                <div className="col-span-1">
                  <span className="text-sm font-medium">
                    $ {parseFloat(item.price) * item.quantity}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4 px-4">
            <h4 className="font-medium">Order Summary</h4>
            <div className="py-2">
              <span className="text-xs text-slate-600">Have a promo code?</span>
              <div className="bg-slate-300 h-8 flex flex-row items-center mt-1">
                <input className="h-full w-3/4 border-l border-t border-b" />
                <button className="bg-blue-500 w-1/4 h-full text-xs text-white font-medium">
                  Apply
                </button>
              </div>
            </div>
            <div>
              <div className="flex flex-row justify-between items-center py-2 mb-1">
                <span className="text-xs font-medium">Subtotal</span>
                <span className="text-xs font-medium">$ 400.00</span>
              </div>
              <div className="flex flex-row justify-between items-center py-2 mb-1">
                <span className="text-xs font-medium">Discount</span>
                <span className="text-xs font-medium">$ 80.00</span>
              </div>
              <div className="flex flex-row justify-between items-center py-2">
                <span className="text-xs font-medium">Total</span>
                <span className="text-xs font-medium">$ 320.00</span>
              </div>
            </div>
            <div className="py-2 mt-4">
              <button className="bg-blue-500 w-full py-2 font-medium text-sm text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="py-7 text-sm font-medium flex justify-center items-center text-slate-500">
      Looks like your cart is empty...
    </div>
  );
}

export default Cart;
