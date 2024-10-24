import { updateCartView } from "./cart.js";
import { navigate } from "./router.js"; // Lisa router navigeerimiseks

export const loadCartView = () => {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Tühjenda tooteala, kui kasutaja vaatab ostukorvi

  const cartSection = document.createElement("div");
  cartSection.innerHTML = "<h2>Ostukorv</h2>";
  const cartItemsContainer = document.createElement("div");
  cartItemsContainer.id = "cart-items";

  cartSection.appendChild(cartItemsContainer);
  productList.appendChild(cartSection);

  // Uuenda ostukorvi vaadet
  updateCartView();

  // Lisa "Back" nupp, mis viib tagasi kategooria vaatesse
  const backButton = document.createElement("button");
  backButton.textContent = "Tagasi";
  backButton.onclick = () => navigate("category"); // Viib tagasi kategooria vaatesse
  productList.appendChild(backButton);
};
