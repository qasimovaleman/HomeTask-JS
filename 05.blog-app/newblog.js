let form = document.querySelector("form");
let input = document.querySelectorAll(".input");
let textarea = document.querySelector("textarea");
let option = document.querySelector("select");
const BASE_URL = `http://localhost:8080`;
const id = new URLSearchParams(window.location.search).get("id");
console.log(id);
//
async function getBlogs() {
  try {
    let response = await axios(`${BASE_URL}/suppliers/${id}`);
    console.log(response.data);

    (input.value = response.data.title),
      (textarea.value = response.data.body),
      (option.value = response.data.author);
  } catch (error) {
    console.log(error);
  }
}
//
id && getBlogs();
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const blog = {
    title: input.value,
    body: textarea.value,
    author: option.value,
  };

  // if (
  //   input.value &&
  //   textarea.value &&
  //   option.value &&

  // ){
  //   if (!id) {
  //     addBlogs(blog);
  //   } else {
  //     updateBlogs(blog);
  //   }
  // } else {
  //   alert("fill all fields!!");
  // }

  if (!id) {
    axios.post(`${BASE_URL}`, blog);
  } else {
    axios.patch(`${BASE_URL}/${id}`, blog);
  }
  console.log(blog);

  input.forEach((item) => {
    item.value = "";
  });
});
//

async function addBlogs(obj) {
  await axios.post(`${BASE_URL}/blogss`, obj);
  window.location = "home.html";
}
async function updateBlogs(obj) {
  await axios.patch(`${BASE_URL}/blogs/${id}`, obj);
  window.location = "home.html";
}
