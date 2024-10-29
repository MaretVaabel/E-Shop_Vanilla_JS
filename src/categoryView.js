import { fetchProductsByCategory } from "./api.js";
import { addToCart } from "./cart.js";
import { navigate } from "./router.js"; // Lisa navigeerimiseks
import { Product } from "./product.js";

export const loadCategoryView = async (category) => {
  const products = await fetchProductsByCategory(category);
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Tühjenda tooteala

  // // Filtreeri tooted, kui valitud on kategooria
  // const filteredProducts =
  //   category === "all"
  //     ? products
  //     : products.filter((product) => product.category === category);

  products.forEach((productData) => {
    const product = new Product(
      productData.id,
      productData.title,
      productData.price,
      productData.description,
      productData.image
    );

    const productElement = document.createElement("div");
    productElement.classList.add("product-item");
    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>${product.price}€</p>
            <button id="add-to-cart-${product.id}">Lisa ostukorvi</button>
        `;

    // Klikk tootekaardil viib toote detailvaatesse
    productElement.onclick = () => navigate("product", product.id);

    productList.appendChild(productElement);

    document.getElementById(`add-to-cart-${product.id}`).onclick = (e) => {
      e.stopPropagation(); // Vältida, et tootekaardile klikkimine navigeeriks tootevaatesse, kui vajutatakse "Lisa ostukorvi" nuppu
      addToCart(product);
      console.log("click");
    };
  });
};
