import { fetchProductById } from "./api.js";
import { addToCart } from "./cart.js";

import inventoryInstance from "./inventory.js";
import { Product } from "./product.js";

export const loadProductView = async (productId) => {
  const productData = await fetchProductById(productId);

  const product = new Product(
    productData.id,
    productData.title,
    productData.price,
    productData.description,
    productData.image
  );
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Tühjenda vaateala

  const productDetailElement = document.createElement("div");
  productDetailElement.classList.add("product-detail");
  productDetailElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Hind: ${product.price}€</p>
         <p>Laos: ${inventoryInstance.getStock(product.id)} ühikut</p>
        <button id="add-to-cart-${product.id}">Lisa ostukorvi</button>
        <button id="back-to-category">Tagasi kategooriasse</button>
    `;
  -productList.appendChild(productDetailElement);

  // Lisa sündmus "Lisa ostukorvi" nupule
  document.getElementById(`add-to-cart-${product.id}`).onclick = () => {
    addToCart(product);
    loadProductView(product.id);
  };

  // Lisa "Back" nupp, mis viib tagasi kategooria vaatesse
  document.getElementById("back-to-category").onclick = () =>
    navigate("category");
};
