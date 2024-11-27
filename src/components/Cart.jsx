import React, { useState } from "react";
import { capitalize, getLocalStorageCartItems } from "../assets/utils";

const Cart = () => {
  const [cart, setCart] = useState(getLocalStorageCartItems());

  // Function to add a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If product already exists, increase its quantity
      setCart(
        cart.map((item) =>
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

  // Function to remove a product entirely from the cart
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Function to increase the quantity of a product
  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease the quantity of a product
  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1, // Prevent quantity going below 1
            }
          : item
      )
    );
  };

  // Calculate the total price of items in the cart
  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.fields.price * item.quantity, 0)
      .toLocaleString();
  };

  return (
    <div className="container">
      <h1 className="my-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{capitalize(item.fields.name)}</td>
                  <td>${item.fields.price.toLocaleString()}</td>
                  <td>{item.quantity}</td>
                  <td>
                    ${(item.fields.price * item.quantity).toLocaleString()}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${calculateTotal()}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
