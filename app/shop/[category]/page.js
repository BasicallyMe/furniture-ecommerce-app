import ProductCard from "@/app/(components)/ProductCard";

const getProducts = async (category) => {
  try {
    const res = await fetch(`http://localhost:3000/shop/${category}/api`, {
      method: "GET",
      headers: { 
        "Content-Type": "application/json",
      },
    });
    return res.json();
  } catch (error) {
    console.log('Failed to get tickets', error);
  }
}

const Category = async ({ params }) => {
  const {products} = await getProducts(params.category);

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
            <ProductCard key={item?._id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
