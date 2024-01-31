"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Heart,
  ArrowRight,
  CheckCircle2,
  Truck,
  Banknote,
  RefreshCw,
} from "lucide-react";
import useGetWishlist from "@/app/(utils)/useGetWishlist";
import useAddToCart from "@/app/(utils)/useAddToCart";
import useAddToWishlist from "@/app/(utils)/useAddToWishlist";
import useDeleteFromWishlist from "@/app/(utils)/useDeleteFromWishlist";

async function getProduct(params) {
  try {
    let res = await fetch(
      `http://localhost:3000/shop/${params.category}/${params.id}/api`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.json();
  } catch (error) {
    console.log("Failed to get product", error);
  }
}

function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [addItemToCart] = useAddToCart();
  const [addItemToWishlist] = useAddToWishlist();
  const [deleteFromWishlist] = useDeleteFromWishlist();
  const [wishlist] = useGetWishlist();

  /**
   * Increases the quantity value of the product state by 1.
   *
   * Uses the prev state value and returns a new state object
   * with quantity incremented by 1.
   */
  const increaseQuantity = () => {
    setProduct((prev) => {
      return {
        ...prev,
        quantity: prev.quantity + 1,
      };
    });
  };

  const decreaseQuantity = () => {
    setProduct((prev) => {
      return {
        ...prev,
        quantity: prev.quantity - 1,
      };
    });
  };

  function isInWishlist() {
    return wishlist.some((wishlistItem) => wishlistItem._id === product._id);
  }

  useEffect(() => {
    async function fetchData() {
      const { product } = await getProduct(params);
      product.quantity = 1;
      setProduct(product);
    }
    fetchData();
  }, [params]);

  if (product === null) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600" />
        <p className="mt-4 text-sm font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <div className="">
      {product && (
        <div className="flex flex-row xs:flex-wrap sm:flex-wrap lg:flex-nowrap gap-6 px-7 py-6">
          <div className="w-1/2 sm:w-full min-h-screen">
            <div className="h-full relative">
              <Image
                src={product.full}
                alt="Photo of a furniture"
                fill
                objectPosition="center"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-1/2 sm:w-full sm:pt-6 px-6">
            <div className="mb-4">
              <h2 className="text-xl font-medium">{product.name}</h2>
              <span className="text-sm text-slate-400 font-medium">
                {`By ${product.manufacturer}`}
              </span>
            </div>
            <div className="mb-3">
              <div className="flex flex-row items-center gap-2">
                <h4 className="font-medium ">$ {`${product.price}`}</h4>
                <h5 className="text-sm font-medium line-through text-slate-300">
                  $2970.00
                </h5>
                <span className="text-sm font-medium text-red-400">
                  30% off
                </span>
              </div>
              <span className="text-xs font-medium text-slate-700">
                In stock: Dispatch in 5 working days
              </span>
            </div>
            <div className="flex flex-row items-center gap-2 my-4">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex flex-row gap-2 items-center">
                <button
                  disabled={product.quantity <= 1}
                  onClick={decreaseQuantity}
                  className="w-7 h-7 bg-blue-500 disabled:bg-slate-200 text-white font-medium flex items-center justify-center"
                >
                  -
                </button>
                <div className="px-1">{product.quantity}</div>
                <button
                  disabled={product.quantity >= 4}
                  onClick={increaseQuantity}
                  className="w-7 h-7 bg-blue-500 disabled:bg-slate-200 text-white font-medium flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-6 mb-4">
              <div className="flex flex-row gap-3">
                <button
                  onClick={() => addItemToCart(product)}
                  className="uppercase bg-blue-500 text-sm font-medium text-white px-3 py-2 w-full"
                >
                  Add to cart
                </button>
                <button className="uppercase border border-blue-500 text-sm font-medium px-3 py-2 w-full text-blue-500">
                  Buy now
                </button>
              </div>
              <button
                onClick={() => {
                  if (isInWishlist()) {
                    deleteFromWishlist(product._id);
                  } else {
                    addItemToWishlist(product);
                  }
                }}
                className="flex flex-row items-center text-xs font-medium text-slate-400 hover:text-slate-700 transition-colors py-2 gap-1"
              >
                {isInWishlist() ? (
                  <>
                    <Heart size={12} strokeWidth={0} fill="#f33939" />
                    <span className="text-red-400">Remove from wishlist</span>
                  </>
                ) : (
                  <>
                    <Heart size={12} strokeWidth={2.5} />
                    Add to wishlist
                  </>
                )}
              </button>
            </div>
            <div>
              <h4 className="mb-2 text-xs text-slate-600 font-medium">
                Eligible for Delivery ?
              </h4>
              <div className="flex flex-row gap-2">
                <div className="flex flex-row items-center">
                  <input
                    name="pin_code"
                    id="pin-code"
                    className="h-full max-h-8 bg-slate-50 px-3"
                  />
                  <button className="bg-blue-500 text-white py-2 px-2">
                    <ArrowRight size={16} />
                  </button>
                </div>
                <div className="flex flex-row items-center">
                  <CheckCircle2 size={18} className="text-green-500 mr-1" />
                  <span className="text-xs font-medium">
                    The product is deliverable to this pincode
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between py-4">
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <div className="w-9  h-9 rounded-full flex justify-center items-center border border-slate-400">
                    <Truck size={16} className="text-slate-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Get it by Thu, 20 Dec
                  </span>
                </div>
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <div className="w-9  h-9 rounded-full flex justify-center items-center border border-slate-400">
                    <RefreshCw size={16} className="text-slate-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Easy returns available
                  </span>
                </div>
                <div className="flex flex-row flex-wrap items-center gap-2">
                  <div className="w-9  h-9 rounded-full flex justify-center items-center border border-slate-400">
                    <Banknote size={16} className="text-slate-400" />
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    Cash on Delivery available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
