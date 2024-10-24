const API_URL = "https://fakestoreapi.com";

export const fetchProducts = async (param) => {
  try {
    // const category = param !== "all" && `/category/${param}`;
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  } catch (error) {
    console.error("Error: ", error);
  }
};

// Laadi konkreetne toode ID järgi
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/products/categories`);
    return await response.json();
  } catch (error) {
    console.error("Error: ", error);
  }
};
