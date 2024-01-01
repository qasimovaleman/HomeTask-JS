const products = document.querySelector(".products");
const favCount = document.querySelector(".fav-count");
const BASE_URL = `http://localhost:8080`;
//
const favoritedProducts = getFavoritesFromLocaleStorage();
drawCards(favoritedProducts);
//
function drawCards(data) {
  products.innerHTML = "";
  data.forEach((element) => {
    const productCardElement = document.createElement("div");
    productCardElement.className = "product-card";
    // //
    const productImageElement = document.createElement("img");
    productImageElement.className = "product-image";
    productImageElement.src = element.imageUrl;
    // //
    const productNameElement = document.createElement("h3");
    productNameElement.className = "product-name";
    productNameElement.textContent = element.name;
    // //
    const productYearsElement = document.createElement("p");
    productYearsElement.className = "product-years";
    productYearsElement.textContent = element.years;
    // //
    const productTitleElement = document.createElement("div");
    productTitleElement.className = "product-title";
    //
    const favIconElement = document.createElement("i");
    const favoritObj = favoritedProducts.find((item) => item.id === element.id);
    favIconElement.className = "fa-solid fa-heart";
    //
    favIconElement.addEventListener("click", function () {
      let favorits = getFavoritesFromLocaleStorage();

      let filtered = favorits.filter((item) => item.id !== element.id);

      setProductToLocaleStorage(filtered);
      productCardElement.remove();
    });
    // //
    productTitleElement.append(favIconElement);
    productCardElement.append(
      productTitleElement,
      productImageElement,
      productNameElement,
      productYearsElement
    );
    //
    products.append(productCardElement);
  });
}
//
function setProductToLocaleStorage(products) {
  localStorage.setItem("favs", JSON.stringify(products));
}

function getFavoritesFromLocaleStorage() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}
