import { useState } from "react";
import { Link } from "react-router-dom";
import {
  capitalize,
  getLocalStorageCartItems,
  updateLocalStorage,
} from "../assets/utils";

const ProductCard = ({ product }) => {
  const [cart, setCart] = useState(getLocalStorageCartItems());

  // Function to add a product to the cart
  const addToCart = (product) => {
    console.log(product);
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // If product already exists, increase its quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If product is new, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  updateLocalStorage(cart);

  return (
    <div className="card">
      <img
        src={product.fields.image[0].url}
        className="card-img-top"
        alt={product.fields.name}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">{capitalize(product.fields.name)}</h5>
        <p className="card-text">${product.fields.price.toLocaleString()}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/products/${product.id}`} className="btn btn-primary">
            View Details
          </Link>
          <button onClick={() => addToCart(product)} className="btn btn-info">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
