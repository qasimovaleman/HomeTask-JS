let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let product = document.querySelector(".product");
let productsDiv = document.querySelector(".products-div");
//
const BASE_URL = ` https://api.escuelajs.co/api/v1`;
//
fetch(`${BASE_URL}/products`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    drawCards(data);
  })
  .catch((err) => console.log(err));

function drawCards(array) {
  productsDiv.innerHTML = "";

  array.forEach((element) => {
    productsDiv.innerHTML += `
    <div class="product">
    <div class="product-image">
      <img src="${element.images[0]}" style="width: 100%" alt="" />
    </div>
    <div class="product-heading">
      <p class="title">title ${element.title}</p>
      <p class="description">Descprition ${element.description.slice(
        0,
        80
      )}...</p>
      <span>Price ${element.price}</span>
      <div><button class="deleteBtn" onclick=deleteCustomer("${
        element.id
      }",this)>Delete</button></div>
    </div>
  </div> `;
  });
}
drawCards();
//
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    title: allInputs[0].value,
    description: allInputs[2].value,
    price: allInputs[1].value,
    images: allInputs[3].value,
  };
  console.log(obj);

  fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => {
    fetch(`${BASE_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        drawCards(data);
      })
      .catch((err) => console.log(err));
  });

  allInputs.forEach((item) => (item.value = ""));
});
//
function deleteCustomer(id, btn) {
  if (confirm("Are u sure to delete customer??")) {
    fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    //   console.log(btn);
    //   btn.parentElement.parentElement.parentElement.remove();
    btn.closest(".product").remove();
  }
}
//

//
// function addNewData(endpoint, obj) {
//   fetch(`${BASE_URL}/${endpoint}`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
// }
