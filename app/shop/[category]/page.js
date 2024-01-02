"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/app/(components)/ProductCard";
import { getProducts } from "@/app/(context)/Products";

function Category({ params }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchedProducts = getProducts(params.category);
    setProducts(fetchedProducts);
  }, [params.category]);
  return (
    <div className="px-6 py-4">
      <div className="mb-3">
        <h2 className="text-xs text-slate-600 font-medium capitalize">{`Shop > ${params.category
          .toString()
          .replace("-", " & ")}`}</h2>
      </div>
      {products.length !== 0 && (
        <div className="flex flex-wrap gap-4">
          {products.map((item, i) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
