import { getCart, getTotal, updateCartView } from "./cart.js";
import { navigate } from "./router.js"; // Lisa router navigeerimiseks

export const loadCartView = () => {
  const cart = getCart();
  console.log("cart", cart);
  const mainContent = document.getElementById("product-list");
  mainContent.innerHTML = ""; // Tühjenda tooteala, kui kasutaja vaatab ostukorvi

  const cartSection = document.createElement("div");
  cartSection.innerHTML = "<h2>Ostukorv</h2>";
  const cartItemsContainer = document.createElement("div");
  cartItemsContainer.id = "cart-items";
  cartSection.appendChild(cartItemsContainer);
  mainContent.appendChild(cartSection);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Ostukorv on tühi.</p>";
    return;
  }

  const total = getTotal();
  mainContent.innerHTML += `<p>Kogusumma: ${total} €</p>`;
  mainContent.innerHTML += `<button onclick="alert('Tellimus esitatud!')">Osta</button>`;

  // Uuenda ostukorvi vaadet
  updateCartView();

  // Lisa "Back" nupp, mis viib tagasi kategooria vaatesse
  const backButton = document.createElement("button");
  backButton.textContent = "Tagasi";
  backButton.onclick = () => navigate("category"); // Viib tagasi kategooria vaatesse
  mainContent.appendChild(backButton);
};
