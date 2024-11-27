import { useState } from "react";
import { allProducts } from "../assets/products";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products] = useState(allProducts);

  return (
    <div className="container">
      <h1 className="my-4">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
