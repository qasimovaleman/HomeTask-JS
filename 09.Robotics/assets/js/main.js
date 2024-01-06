const BASE_URL = `http://localhost:8080`;
const products = document.querySelector(".products");
const searchInput = document.querySelector(".search");
let arr;
//
async function getData(endPoint) {
  const response = await axios(`${BASE_URL}/${endPoint}`);
  console.log(response.data);
  drawCards(response.data);
  arr=response.data
}
getData("robotics");
//
function drawCards(data) {
  products.innerHTML = "";
  data.forEach((element) => {
    products.innerHTML += `
        
        <div class="col-12 col-md-6 col-lg-3 mb-4 card-info">
        <div class="card robotCard style="width:8rem" >
          <div class="card-body">
          <img src="${element.imageUrl}" alt="">
            <p class="card-text title">
              ${element.name}
            </p>
            <p class="card-text">
             <span >${element.description}</span>
            </p>
           
           <div>
           <button href="#" class="btn btn-success" onclick=editCustomer("${element.id}",this)>EDIT</button>
           <button href="#" class="btn btn-danger" onclick=deleteCustomer("${element.id}",this)>DELETE</button>
           </div>
            <a href="./details.html?id=${element.id}" class="btn btn-primary">VIEW DETAILS</a>
          </div>
        </div>
      </div>
        `;
  });
}
//
function deleteCustomer(id) {
  fetch(`${BASE_URL}/robotics/${id}`, {
    method: "DELETE",
  }).then(() => {
    fetch(`${BASE_URL}/robotics`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        drawCards(data);
      })
      .catch((err) => console.log(err));
  });
}
searchInput.addEventListener("input", function (e) {
    // e.preventDefault();
    let filtered = arr.filter((item) =>
      item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filtered);
    drawCards(filtered);
  });
  