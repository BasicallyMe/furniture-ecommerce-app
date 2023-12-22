import ProductCard from "@/app/(components)/ProductCard";
import { products } from "@/app/(context)/Products";

function Category({ params }) {
  return (
    <div className="px-6 py-4">
      <div className="mb-3">
        <h2 className="text-xs text-slate-600 font-medium capitalize">{`Shop > ${params.category.toString().replace('-', ' & ')}`}</h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {products.map((item, i) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Category;
