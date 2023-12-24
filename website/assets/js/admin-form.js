const id = new URLSearchParams(window.location.search).get("id");
const inputs = document.querySelectorAll(".form-control");
const form = document.querySelector("form");
//
let BASE_URL = ` http://localhost:8080/productcards`;

//
//
if (id) {
  axios(`${BASE_URL}/${id}`).then((res) => {
    inputs[1].value = res.data.name;
    inputs[2].value = res.data.description;
    
  });
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: inputs[1].value,
    description: inputs[2].value,
    
    imageUrl: `./assets/images/${inputs[0].value.split("\\")[2]}`,
  };
  console.log(inputs[0].value);

  if (id) {
    axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    axios.post(`${BASE_URL}`, obj);
  }
  window.location = "admin.html";
});

// async function getData() {
//   let response = await axios(`${BASE_URL}/${id}`);
//   inputs[0].value = `${response.data.imageUrl}`;
//   inputs[1].value = `${response.data.name}`;
//   inputs[2].value = `${response.data.description}`;
//   inputs[3].value = `${response.data.price}`;
// }
// if (id) {
//   getData();
// }
// //
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let obj = {
//     name: inputs[2].value,
//     description: inputs[3].value,
//     price: inputs[4].value,

//     imageUrl: `./assets/img/${inputs[1].value.split("\\")[2]}`,
//   };
//   console.log(obj);

//   if (!id) {
//     addData();
//   } else {
//     updateData();
//   }
// });
// async function addData(obj) {
//   await axios.post(`${BASE_URL}/`, obj);
//   window.location = "./admin.html";
// }
// async function updateData(obj) {
//   await axios.patch(`${BASE_URL}/${id}`, obj);
//   window.location = "./admin.html";
// }