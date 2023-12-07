//
const id = new URLSearchParams(window.location.search).get("id");
const details = document.querySelector(".details");
const detailsBtn = document.querySelector(".detailsBtn");
const BASE_URL = `http://localhost:8080/blogs`;

async function getData() {
  let response = await axios(`${BASE_URL}/${id}`);
  console.log(response.data);
  drawCards(response.data);
}
getData();
function drawCards(data) {
  details.innerHTML = "";

  details.innerHTML += `
          
          <div class="card">
          <div class="card-body">
            <h3 class="card-title">${data.title}</h3>
            <div><a class="text">
            ${data.body}... 
          </a>
            <p class="card-text">${data.author}</p>
            <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            aut sunt doloremque ab animi repellendus quibusdam harum at hic
            nulla. temporibus molestiae adipisci, ullam quos, sunt enim
            minus aperiam. Delectus facere in magni beatae.
          </p>
          <p class="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                voluptatibus quo deleniti consequatur, explicabo distinctio
                praesentium!
              </p>
            <div class="btns">
           </div>
          </div>
        </div>`;
}

detailsBtn.addEventListener("click", function () {
  window.history.back();
});
