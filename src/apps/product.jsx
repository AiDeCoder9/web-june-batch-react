import { useState } from "react";

function Products() {
  const [categoryList, setCategoryList] = useState([
    "Bag",
    "Shoes",
    "Watch",
    "Clothes",
    "Electronics",
  ]);
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "School Bag",
      description: "14l bag",
      price: 10,
      image:
        "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?cs=srgb&dl=pexels-bertellifotografia-2905238.jpg&fm=jpg", //replace this link with working one
    },
  ]);
  return (
    <div clasName="mx-auto py-10 container">
      <div className="mb-6">
        <h2 className="mb-4 font-semibold text-3xl">Categories</h2>
        <div id="category-list" className="flex space-x-4 overflow-x-auto">
          {categoryList.map((category) => {
            return (
              <button className="bg-gray-300 px-4 py-2 rounded-md">
                {category}
              </button>
            );
          })}
        </div>
      </div>
      <div
        id="product-grid"
        className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {productList.map((product) => {
          return (
            <div className="bg-white shadow-lg hover:shadow-xl p-4 rounded-lg transition-shadow">
              <img
                src={product.image}
                alt={product.name}
                class="mb-4 rounded-md w-full h-64 object-cover"
              />
              <h3 className="font-semibold text-xl">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="mt-2 font-bold text-lg">${product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
