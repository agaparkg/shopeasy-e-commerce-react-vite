import React from "react";
import { useParams } from "react-router-dom";
import { allProducts } from "../assets/products";
import { capitalize } from "../assets/utils";

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="container">
      <h1>{product.title}</h1>
      <img
        src={product.fields.image[0].url}
        alt={product.fields.name}
        className="img-fluid"
        height={300}
        width={400}
      />
      <h3>{product.fields.company.toUpperCase()}</h3>
      <h5>{capitalize(product.fields.name)}</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, veniam
        nemo quod nobis et eveniet. Culpa ex consequatur at, magni commodi iusto
        voluptate mollitia animi deleniti accusamus omnis fuga nulla.
      </p>
      <p>
        <strong>Price:</strong> ${product.fields.price.toLocaleString()}
      </p>
    </div>
  );
};

export default ProductDetails;
