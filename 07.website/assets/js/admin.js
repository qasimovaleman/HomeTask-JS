const tBody = document.querySelector("tbody");
const BASE_URL = ` http://localhost:8080`;
//
async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawTable(response.data);
}
getData("productcards");
//////////
function drawTable(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    const trElement = document.createElement("tr");
    trElement.innerHTML = `
            <td>${element.id}</td>
            <td><img src="${element.imageUrl}" alt="" class="tableImage"></td>
            <td>${element.name}</td>
            <td>${element.description}</td>
            <td > <a href="admin-form.html?id=${element.id}"class="btn btn-success">EDIT<a/></td>
            <td > <button class="btn btn-danger" onclick=deleteSupplier(${element.id},this)>DELETE</button></td>
    `;
    tBody.append(trElement);
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
