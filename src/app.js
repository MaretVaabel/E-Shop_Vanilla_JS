import { fetchCategories } from "./api.js";
import { loadCategoryView } from "./categoryView.js";
import { navigate } from "./router.js";

const initApp = async () => {
  console.log("siin");
  const categories = await fetchCategories();
  console.log(categories);
  const categoryMenu = document.getElementById("category-menu");

  categories.forEach((category) => {
    const categoryElement = document.createElement("li");
    categoryElement.textContent = category;
    categoryElement.onclick = () => loadCategoryView(category);
    categoryMenu.appendChild(categoryElement);
  });

  // Lae algne vaade
  loadCategoryView(categories[0]);

  // Lisa sündmus "Ostukorvi" nupule
  const cartButton = document.getElementById("go-to-cart");
  cartButton.onclick = () => navigate("cart");
};

document.addEventListener("DOMContentLoaded", initApp);
