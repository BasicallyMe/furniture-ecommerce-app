"use client";
import Image from "next/image";
import useGetWishlist from "../(utils)/useGetWishlist";
import Navigation from "../(components)/Navigation";
import { X } from 'lucide-react'

function Wishlist() {
  const [wishlist] = useGetWishlist();
  return (
    <div>
      <Navigation renderOptions={false} />
      <div className="py-3 px-6">
        <div className="mb-10">
          <h2 className="text-lg font-semibold">
            My wishlist{" "}
            <span className="text-slate-600 text-sm font-normal ml-2">{`${wishlist.length} items`}</span>
          </h2>
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          {wishlist.map((item, index) => (
            <div key={index} className="w-56 h-72">
              <div className="relative w-full h-3/4">
                <Image
                  src={item.thumbnail}
                  alt="Something"
                  objectPosition="center"
                  className="object-cover h-full w-full"
                  fill
                />
                <button className="absolute top-2 right-2 bg-slate-200 rounded-full p-1">
                  <X size={20} strokeWidth={1.25} />
                </button>
              </div>
              <div className="py-3">
                <div>
                  <h4 className="text-sm font-medium">{item.name}</h4>
                </div>
                <div className="py-2">
                  <span className="font-semibold">{`$ ${item.price}`}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
