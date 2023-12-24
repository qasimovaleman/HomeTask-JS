const products = document.querySelector(".products");
const favCount = document.querySelector(".fav-count");
const BASE_URL = ` http://localhost:8080`;
//////

const favoritedProducts = getFavoritesFromLocaleStorage();
//
calculateFavCount(favoritedProducts.length);
/////

async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);

  drawCards(response.data);
}
getData("productcards");
/////
function drawCards(data) {
  products.innerHTML = "";
  data.forEach((element) => {
    const productCardElement = document.createElement("div");
    productCardElement.className = "product-card";
    ///
    const productImageElement = document.createElement("img");
    productImageElement.className="image"
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
    ///
    favIconElement.className = favoritObj
      ? "fa-solid fa-heart"
      : "fa-regular fa-heart";
    ///
    favIconElement.addEventListener("click", function () {
      this.className === "fa-regular fa-heart"
        ? (this.className = "fa-solid fa-heart")
        : (this.className = "fa-regular fa-heart");
      ///
      let favorites = getFavoritesFromLocaleStorage();
      ///
      const favIndex = favorites.findIndex((item) => item.id === element.id);
      ///
      if (favIndex === -1) {
        favorites.push(element);
      } else {
        favorites.splice(favIndex, 1);
      }
      ///
      setProductToLocaleStorage(favorites);
      calculateFavCount(favorites.length);
    });
    ///
    productCardElement.append(
      favIconElement,
      productImageElement,
      productNameElement,
     productDescriptionElement
    );
    products.append(productCardElement);
  });
}
/////

function setProductToLocaleStorage(products) {
  localStorage.setItem("favs", JSON.stringify(products));
}

/////

function getFavoritesFromLocaleStorage() {
  return JSON.parse(localStorage.getItem("favs")) ?? [];
}

//////

function calculateFavCount(count) {
  favCount.textContent = count;
}
