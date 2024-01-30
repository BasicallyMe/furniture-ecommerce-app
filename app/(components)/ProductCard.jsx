"use client";
import Image from "next/image";
import { useState } from "react";
import { Heart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import useAddToCart from "../(utils)/useAddToCart";
import useAddToWishlist from "../(utils)/useAddToWishlist";
import useGetWishlist from "../(utils)/useGetWishlist";
import useDeleteFromWishlist from "../(utils)/useDeleteFromWishlist";

function ProductCard({ data }) {
  const [addItemToCart] = useAddToCart();
  const [wishlist] = useGetWishlist();
  const [addItemToWishlist] = useAddToWishlist();
  const [deleteFromWishlist] = useDeleteFromWishlist();
  const pathname = usePathname();
  const router = useRouter();

  const handleAddToCart = (e, data) => {
    e.stopPropagation();
    data.quantity = 1;
    addItemToCart(data);
  };

  function isInWishlist() {
    console.log('calling check', data.id);
    return wishlist.some((wishlistItem) => wishlistItem._id === data._id);
  }

  return (
    <div
      className="w-52 relative overflow-hidden cursor-pointer"
      onClick={() => router.push(`${pathname}/${data._id}`)}
    >
      <div className="relative w-full h-48">
        <Image
          src={data.thumbnail}
          alt={data.name}
          objectPosition="center"
          className="object-cover"
          fill
        />
        {isInWishlist() ? (
          <button
            className="absolute top-2 right-2 flex items-center justify-center h-6 w-6 bg-slate-50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              deleteFromWishlist(data._id)
            }}
          >
            <Heart
              size={16}
              fill="#f33939"
              color="transparent"
              strokeWidth={1.25}
            />
          </button>
        ) : (
          <button
            className="absolute top-2 right-2 flex items-center justify-center h-6 w-6 bg-slate-50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              addItemToWishlist(data);
            }}
          >
            <Heart size={16} color="#f33939" strokeWidth={1.25} />
          </button>
        )}
      </div>
      <div className=" py-3">
        <div className="text-sm font-medium mb-3">
          <h3 className="truncate">{data.name}</h3>
        </div>
        <div className="flex flex-row justify-between items-center">
          <span className="text-sm font-semibold">$ {data.price}</span>
          <button
            onClick={(e) => handleAddToCart(e, data)}
            className="py-2 px-3 text-xs font-medium bg-blue-500 hover:bg-blue-600 transition-colors text-white"
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
