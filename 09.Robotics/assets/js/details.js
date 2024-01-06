let id = new URLSearchParams(window.location.search).get("id");

console.log(id);
const products = document.querySelector(".products");

const BASE_URL = `http://localhost:8080`;

//////////////////
fetch(`${BASE_URL}/robotics/${id}`)
  .then((res) => res.json())
  .then((element) => {
    products.innerHTML = `
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
  
      </div>
    </div>
  </div>
    `;
  });

function goBack() {
  window.history.back();
}
