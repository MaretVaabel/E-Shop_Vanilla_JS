import { navigate } from "./router.js"; // Lisa router navigeerimiseks

let cart = [];

export const addToCart = (product) => {
  const existingProduct = cart.find((item) => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  // Peale toote lisamist navigeeri ostukorvi vaatesse
  navigate("cart");
  //   updateCartView();
};

export const removeFromCart = (productId) => {
  cart = cart.filter((item) => item.id !== productId);
  updateCartView();
};

export const updateCartView = () => {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = "";
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.textContent = `${item.title} - ${item.quantity}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Eemalda";
    removeButton.onclick = () => removeFromCart(item.id);
    cartItem.appendChild(removeButton);
    cartItemsContainer.appendChild(cartItem);
  });
};
