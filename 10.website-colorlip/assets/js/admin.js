const tBody = document.querySelector("tbody");
const form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
const BASE_URL = `http://localhost:8080`;
let editId = null;
//
async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawTable(response.data);
}
getData("shopcard");
////
function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
         <td>${element.id}</td>
            <td> <img src="${element.imageUrl}"alt="foto" class="table-image"> </td>
            <td>${element.title}</td>
            <td>${element.description}</td>
          <td><button class="btn btn-danger"
           onclick=deleteCustomer("${element.id}",this)>DELETE</button> </td>
           <td> <button class="btn btn-success" onclick=editBtn("${element.id}")>EDIT</button> </td>
         `;
    tBody.append(trElement);
  });
}
////////////////////////
function deleteCustomer(id, btn) {
  try {
    if (window.confirm("you wannt to delete card")) {
      axios.delete(`${BASE_URL}/shopcard/${id}`);
      btn.closest(".product-card").remove();
    }
  } catch (error) {
    console.log(error);
  }
}
//////////////////////////

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    title: allInputs[1].value,
    description: allInputs[2].value,
    imageUrl: `./assets/img/${allInputs[0].value.split("\\")[2]}`,
  };

  if (!editId) {
    if (
      allInputs[0].value != "" &&
      allInputs[1].value != "" &&
      allInputs[2].value != ""
    ) {
      await axios.post(`${BASE_URL}/shopcard`, obj);
    } else {
      alert("bow buraxmaq olmaz");
    }
  } else {
    await axios.patch(`${BASE_URL}/shopcard/${editId}`, obj);
  }
});
///////////////////////////////////////////////////////////
async function editBtn(id) {
  editId = id;
  const response = await axios(`${BASE_URL}/shopcard/${id}`);

  allInputs[1].value = response.data.title;
  allInputs[2].value = response.data.description;
}
