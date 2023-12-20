const tBody = document.querySelector("tbody");
const searchInput = document.querySelector(".searchInput");
let arr;
const BASE_URL = `http://localhost:8080`;
async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawTable(response.data);
  arr = response.data;
}
getData("products");
/////////////////////////////////////////////////////////////////
function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
  
    <td>${element.id}</td>
    <td><img src="${element.imageUrl}" alt="" class="images"></td>
    <td>${element.name}</td>
    <td>${element.description}</td>
    <td>${element.price}</td>
    <td>
               <button class="btn btn-danger" onclick=deleteSupplier(${element.id},this)>DELETE</button>
               <a class="btn btn-success" href="admin-form.html?id=${element.id}">EDIT</a>
    </td>
    
    `;
    tBody.append(trElem);
  });
}
///////////////////////////////////////////////////////////////
async function deleteSupplier(id, btn) {
  console.log(id);

  if (confirm("are sure to delete supplier??")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URL}/products/${id}`);
  }
}
//////////////////////////////////////////////////////////////////
searchInput.addEventListener("input", function (e) {
  e.preventDefault();
  let filtered = arr.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  drawTable(filtered);
  console.log(filtered);
});
