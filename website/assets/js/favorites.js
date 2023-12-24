const products = document.querySelector(".products");
const favCount = document.querySelector(".fav-count");

const BASE_URL = `http://localhost:8080`;
const favoritedProducts = getFavoritesFromLocaleStorage();
///
drawCards(favoritedProducts);
function drawCards(data) {
  products.innerHTML = "";
  data.forEach((element) => {
    const productCardElement = document.createElement("div");
    productCardElement.className = "product-card";
    ///
    const productImageElement = document.createElement("img");
    productImageElement.src = element.imageUrl;
    ///
    const productNameElement = document.createElement("h3");
    productNameElement.innerText = element.name;
    productNameElement.className = "product-card-name";
    ///
    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.innerText = element.description;
    ///
    const favIconElement = document.createElement("i");
    ///
    const favoritObj = favoritedProducts.find((item) => item.id === element.id);
    favIconElement.className = "fa-solid fa-heart";
    favIconElement.addEventListener("click", function () {
      let favorits = getFavoritesFromLocaleStorage();
      let filtered = favorits.filter((item) => item.id !== element.id);
      setProductToLocaleStorage(filtered);
      productCardElement.remove();
    });
    productCardElement.append(
      favIconElement,
      productImageElement,
      productNameElement,
      productDescriptionElement
    );
    products.append(productCardElement);
  });
}

function setProductToLocaleStorage(products) {
  localStorage.setItem("favs", JSON.stringify(products));
}

function getFavoritesFromLocaleStorage() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}
