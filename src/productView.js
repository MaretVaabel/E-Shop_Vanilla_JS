import { fetchProductById } from "./api.js";
import { addToCart } from "./cart.js";

// export const loadProductView = async (productId) => {
//   const product = await fetchProductById(productId);
//   const productDetail = document.getElementById("product-list");
//   productDetail.innerHTML = `
//         <h2>${product.title}</h2>
//         <img src="${product.image}" alt="${product.title}">
//         <p>${product.description}</p>
//         <p>${product.price}€</p>
//         <button id="add-to-cart">Lisa ostukorvi</button>
//     `;

//   document.getElementById("add-to-cart").onclick = () => addToCart(product);
// };

export const loadProductView = async (productId) => {
  const product = await fetchProductById(productId);
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Tühjenda vaateala

  const productDetailElement = document.createElement("div");
  productDetailElement.classList.add("product-detail");
  productDetailElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p>Hind: ${product.price}€</p>
        <button id="add-to-cart-${product.id}">Lisa ostukorvi</button>
        <button id="back-to-category">Tagasi kategooriasse</button>
    `;

  productList.appendChild(productDetailElement);

  // Lisa sündmus "Lisa ostukorvi" nupule
  document.getElementById(`add-to-cart-${product.id}`).onclick = () =>
    addToCart(product);

  // Lisa "Back" nupp, mis viib tagasi kategooria vaatesse
  document.getElementById("back-to-category").onclick = () =>
    navigate("category");
};
