import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

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
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="container">
      <h1 className="my-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some products to get started!</p>
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
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
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

      {/* Dummy buttons to simulate adding products */}
      <div className="mt-4">
        <h5>Add Products to Cart:</h5>
        <button
          className="btn btn-primary me-2"
          onClick={() => addToCart({ id: 1, name: "Product 1", price: 10.99 })}
        >
          Add Product 1 ($10.99)
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => addToCart({ id: 2, name: "Product 2", price: 19.99 })}
        >
          Add Product 2 ($19.99)
        </button>
        <button
          className="btn btn-primary"
          onClick={() => addToCart({ id: 3, name: "Product 3", price: 5.49 })}
        >
          Add Product 3 ($5.49)
        </button>
      </div>
    </div>
  );
};

export default Cart;
