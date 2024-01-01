//
const BASE_URL = `http://localhost:8080`;

const products = document.querySelector(".products");
const favCount=document.querySelector(".fav-count")
//
const favoritedProducts = getFavoritesFromLocaleStorage();
calculateFavCount(favoritedProducts.length);
//
async function getData() {
  const response = await axios(`${BASE_URL}/childCards`);
  console.log(response.data);
  drawCards(response.data);
}
getData();
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
    favIconElement.className = favoritObj
      ? "fa-solid fa-heart"
      : "fa-regular fa-heart";
    //
    favIconElement.addEventListener("click", function () {
      this.className === "fa-regular fa-heart"
        ? (this.className = "fa-solid fa-heart")
        : (this.className = "fa-regular fa-heart");
      let favorites = getFavoritesFromLocaleStorage();
      const favIndex = favorites.findIndex((item) => item.id === element.id);
      //
      //
      if (favIndex === -1) {
        favorites.push(element);
      } else {
        favorites.splice(favIndex, 1);
      }
      //
      //
      setProductToLocaleStorage(favorites);
      calculateFavCount(favorites.length);
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
//
function getFavoritesFromLocaleStorage() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}
//
function calculateFavCount(count) {
  calculateFavCount.textContent = count;
}
