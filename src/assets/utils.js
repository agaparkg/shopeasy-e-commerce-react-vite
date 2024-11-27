export const capitalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const updateLocalStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export const getLocalStorageCartItems = () =>
  JSON.parse(localStorage.getItem("cart")) || [];
