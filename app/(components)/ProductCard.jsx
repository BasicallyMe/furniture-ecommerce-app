'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useAddToCart from "../(utils)/useAddToCart";

function ProductCard({ data }) {
  const [isItemAdded, addItemToCart] = useAddToCart();
  const pathname = usePathname();
  const router = useRouter();
  const handleAddToCart = (e, data) => {
    e.stopPropagation();
    data.quantity = 1;
    addItemToCart(data);
  }
  return (
    <div
      className="w-52 relative overflow-hidden cursor-pointer"
      onClick={() => router.push(`${pathname}/${data.id}`)}
    >
      <div className="relative w-full h-48">
        <Image
          src={data.thumbnail}
          alt={data.name}
          objectPosition="center"
          className="object-cover"
          fill
        />
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
