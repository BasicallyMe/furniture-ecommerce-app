import ProductCard from "@/app/(components)/ProductCard";

let products = [
  {
    id: "a1b2c3d4",
    name: "Modern Gray Fabric Sofa",
    type: "Living Room",
    price: 599.99,
    color: "Gray",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "e5f6g7h8",
    name: "Elegant Walnut Dining Table",
    type: "Dining Room",
    price: 349.99,
    color: "Walnut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "i9j0k1l2",
    name: "Classic White Queen Bed",
    type: "Bedroom",
    price: 799.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    color: "White",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "m3n4o5p6",
    name: "Contemporary Espresso Bookshelf",
    type: "Study",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    price: 159.99,
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    color: "Espresso",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "q7r8s9t0",
    name: "Oak Wood Coffee Table",
    type: "Living Room",
    price: 249.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    color: "Oak",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "u1v2w3x4",
    name: "Cherry Wood Wardrobe",
    type: "Bedroom",
    price: 499.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    color: "Cherry",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "y5z6a7b8",
    name: "Sleek Black Office Desk",
    type: "Study",
    price: 179.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    color: "Black",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "c9d0e1f2",
    name: "Metallic Bar Stool",
    type: "Kitchen",
    price: 79.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    color: "Metallic",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "g3h4i5j6",
    name: "Mahogany Nightstand",
    type: "Bedroom",
    price: 129.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    color: "Mahogany",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "k7l8m9n0",
    name: "Chestnut Finish Living Room Cabinet",
    type: "Living Room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    price: 449.99,
    color: "Chestnut",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "o1p2q3r4",
    name: "Maple Wood Side Table",
    type: "Living Room",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    price: 89.99,
    color: "Maple",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
  {
    id: "s5t6u7v8",
    name: "Outdoor Blue Lounge Chair",
    type: "Outdoor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu ex pellentesque, euismod nisi at, tincidunt turpis. Curabitur leo tortor, pharetra vel libero eget, dapibus pulvinar urna. Morbi vulputate gravida elit vel fringilla. Maecenas aliquam elit sit amet nisl convallis condimentum. Nam pretium felis eget nisl pellentesque, et fringilla massa maximus. Donec consectetur tincidunt ultrices. In nibh odio, viverra sed erat sit amet, vulputate consectetur mauris.",
    full: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE3MDExODd8&ixlib=rb-4.0.3&q=80&w=1080",
    price: 299.99,
    color: "Blue",
    thumbnail:
      "https://images.unsplash.com/photo-1611967164521-abae8fba4668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDE1ODY1MDN8&ixlib=rb-4.0.3&q=80&w=600",
  },
];

function Category({ params }) {
  return (
    <div className="px-6 py-4">
      <div className="mb-3">
        <h2 className="text-xs text-slate-600 font-medium">{`Shop > ${params.category.toString().replace('-', ' & ')}`}</h2>
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
