const search = document.querySelector(".search");
const cards = document.querySelector(".cards");
console.log(cards);
const BASE_URL = `http://localhost:8080`;
let blogs = null;
let blogsCopy = null;
//

(async () => {
  let response = await axios(`${BASE_URL}/blogs`);
  blogs = response.data;
  blogsCopy = structuredClone(blogs);
})();
//
search.addEventListener("input", function (event) {
  let filtered = blogs.filter((item) =>
    item.title
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );
  drawCards(filtered);
});

//
async function getData(endPoint) {
  let response = await axios(`${BASE_URL}/${endPoint}`);
  // console.log(response.data);
  blogs = response.data;
  drawCards(response.data);
}
getData("blogs");
//
function drawCards(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `
        
        <div class="card">
        <div class="card-body">
          <h3 class="card-title">${element.title}</h3>
          <div><a class="text">
          ${element.body}... 
        </a>
        <a href="details.html ?id=${element.id}" class="readMore">Read More</a></div>
         <p class="card-text">${element.author}</p>
          <div class="btns">
           <button class="Delete" onclick=deleteBtn(${element.id},this)>Delete</button>
              <a  href="./form.html?id=${element.id}"  class="edit" >Edit</a>
          </div>
        </div>
      </div>
        `;
  });
}
//drawCards("blogs");
//
//

async function deleteBtn(id, btn) {
  if (confirm("are u sure to delete blogs??")) {
    btn.parentElement.parentElement.parentElement.remove();
    await axios.delete(`${BASE_URL}/blogs/${id}`);
  }
}
