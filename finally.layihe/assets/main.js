// const products = document.querySelector(".products");
const searchInput = document.querySelector(".search");
// const favCount = document.querySelector(".fav-count");
// let arr;
// const BASE_URL = `http://localhost:8080`;
// const favoritedProducts = getFavoritesFromLocalStorage();
// //calculateFavCount(favoritedProducts.length);
// //
// async function getData(endPoint) {
//   const response = await axios(`${BASE_URL}/${endPoint}`);
//   console.log(response.data);
//   drawCard(response.data);
//   arr = response.data;
// }
// getData("products");
// //
// function drawCard(data) {
//   products.innerHTML = "";
//   data.forEach((element) => {
//     products.innerHTML += `
//           <div class="productDiv">
//           <div class="iconParent" >
//           <div></div>

//           <div class="iParent" onclick="toggleFavorite(event,${element.id})">
//           <i class="fa-regular fa-heart"></i>
//           </div>
//         </div>
//                  <a href="details.html?id=${element.id}">

//             <img src="${element.imageUrl}" alt="">
//                  </a>
//                    <h3>${element.name}</h3>
//                    <p>${element.price}</p>
//           </div>
//     `;
//   });
// }

// //
searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  drawCards(filtered);
  console.log(filtered);
});

// /////
// function toggleFavorite(event, productId) {
//   const iconElement = event.currentTarget.querySelector("i");
//   iconElement.classList.toggle("fa-regular");
//   iconElement.classList.toggle("fa-solid");
// }
// //
// let favorites = getFavoritesFromLocalStorage();

// const favIndex = favorites.findIndex((item) => item.id === element.id);

// if (favIndex === -1) {
//   favorites.push(element);
// } else {
//   favorites.splice(favIndex, 1);
// }

// setProductToLocaleStorage(favorites);

// calculateFavCount(favorites.length);

// //
// function setProductToLocaleStorage() {
//   localStorage.setItem("favs", JSON.stringify(products));
// }
// //
// function getFavoritesFromLocalStorage() {
//   JSON.parse(localStorage.getItem("favs")) ?? [];
// }
// function calculateFavCount(count) {
//   favCount.textContent = count;
// }

const BASE_URL = ` http://localhost:8080`;
const products = document.querySelector(".products");
const favCount = document.querySelector(".fav-count");
const sort = document.querySelector(".sort");
//const loadMore = document.querySelector(".load-more button");
let productsCopy = [];
//let limit = 3;
const favoritedProducts = getFavoritesFromLocaleStorage();

calculateFavCount(favoritedProducts.length);

async function getProducts(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  productsCopy = response.data;
  //drawCards(response.data.slice(0, limit));
  drawCards(response.data);
}

getProducts("products");

function drawCards(data) {
  products.innerHTML = "";

  data.forEach((element) => {
    const productCardElement = document.createElement("div");
    productCardElement.className = "product-card";
    const productTitleDivElement = document.createElement("div");
    productTitleDivElement.className = "product-card-title";

    const productNameElement = document.createElement("h3");
    productNameElement.textContent = element.name;
    const favIconElement = document.createElement("i");

    const favoritObj = favoritedProducts.find((item) => item.id === element.id);

    favIconElement.className = favoritObj
      ? "fa-solid fa-heart"
      : "fa-regular fa-heart";

    const productPriceElement = document.createElement("p");
    productPriceElement.innerHTML = `Price: <b>$ ${element.price}</b>`;

    //const productDescriptionElement = document.createElement("p");
    //productDescriptionElement.textContent = element.description;

    const productImageElement = document.createElement("img");

    productImageElement.src = element.imageUrl;

    favIconElement.addEventListener("click", function () {
      this.className === "fa-regular fa-heart"
        ? (this.className = "fa-solid fa-heart")
        : (this.className = "fa-regular fa-heart");

      let favorites = getFavoritesFromLocaleStorage();

      const favIndex = favorites.findIndex((item) => item.id === element.id);

      if (favIndex === -1) {
        favorites.push(element);
      } else {
        favorites.splice(favIndex, 1);
      }

      setProductToLocaleStorage(favorites);

      calculateFavCount(favorites.length);
    });

    productTitleDivElement.append(favIconElement);

    productCardElement.append(
      productTitleDivElement,
      productImageElement,
      productNameElement,
      productPriceElement
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

function calculateFavCount(count) {
  favCount.textContent = count;
}
//
sort.addEventListener("click", function () {
  productsCopy.sort((a, b) =>
    a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
  );
  productsCopy.sort((a, b) =>
    b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase())
  );
});
