const productCardLists = document.querySelector(".productCardLists");
//
let arr;
const searchInput = document.querySelector(".searchInput");
//
const sort = document.querySelector(".sort");
let productsCoppy = null;
let products = null;
// //
const BASE_URL = `http://localhost:8080`;
//
async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  //
  arr = response.data;
  //
  products = response.data;
  productsCoppy = structuredClone(products);
  //
  drawCards(response.data);
  //
}
getData("shopcard");
///////
function drawCards(data) {
  productCardLists.innerHTML = "";
  ////
  data.forEach((element) => {
    const productCardElement = document.createElement("div");
    productCardElement.className = "product-card";
    ////
    const productImageElement = document.createElement("img");
    productImageElement.className = "product-image";
    productImageElement.src = element.imageUrl;
    ////
    const productTitleElement = document.createElement("h5");
    productTitleElement.textContent = element.title;
    productTitleElement.className = "product-title";
    ////
    const productDescriptionElement = document.createElement("p");
    productDescriptionElement.textContent = element.description;
    productDescriptionElement.className = "product-description";
    ////
    const productDetailsButtonElement = document.createElement("a");
    productDetailsButtonElement.className = "details-button";
    productDetailsButtonElement.textContent = "View";
    productDetailsButtonElement.href=`details.html?id=${element.id}`
    ////////////////////////////////////////
    productCardElement.append(
      productImageElement,
      productTitleElement,
      productDescriptionElement,
      productDetailsButtonElement
    );
    productCardLists.append(productCardElement);
  });
}
searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  //
  let filtered = arr.filter((item) =>
    item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  console.log(filtered);
  drawCards(filtered);
});
///////
sort.addEventListener("click", function () {
  let sorted;
  if (this.innerText == "Ascending") {
    sorted = products.sort((a, b) => a.title.localeCompare(b.title));
    this.innerText = "Descending";
  } else if (this.innerText == "Descending") {
    sorted = products.sort((a, b) => b.title.localeCompare(a.title));
    this.innerText = "Default";
  } else {
    this.innerText = "Ascending";
    sorted = productsCoppy;
  }
  drawCards(sorted);
});
