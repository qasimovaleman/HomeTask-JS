//
const details = document.querySelector(".details");
//
let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
//
const BASE_URL = `http://localhost:8080`;
//
async function getData() {
  try {
    const response = await axios(`${BASE_URL}/shopcard/${id}`);
  console.log(response.data);
  //products(response.data)
  drawCards(response.data);
  } catch (error) {
    console.log(error);
  }
}
getData();
///////////////////////////
function drawCards(data) {
  details.innerHTML = "";
  ////
  details.innerHTML += `
<div class="product-card">
    <img src="${data.imageUrl}" alt="" class="producct-image" />
    <h5 class="product-title">${data.title}</h5>
    <p class="product-description">${data.description}</p>
</div>
    `;
}
