import {
  tostTopEnd,
  slide,
  isUserLoggedin,
  serverConfig,
} from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
header();
footer();
slide();
isUserLoggedin();

let baseUrl = serverConfig() + "/products";
data(baseUrl);
// Fetch data from the API
async function data(baseUrl) {
  try {
    let data = await fetch(baseUrl);
    data = await data.json();
    display(data);
  } catch (error) {
    tostTopEnd.fire({
      icon: "error",
      title: `${error}`,
    });
    return;
  }
}

function display(data) {
  data.sort((a, b) => b.id - a.id); //reverse data
  let product = document.getElementById("products");
  product.innerHTML = ""; // clear
  // console.log(data.reverse());
  data.forEach((element) => {
    console.log(element);
    product.innerHTML += `
  <a href="/routes/product.html" class="product">
  <img src="${element.image}" alt="${element.title}" />
  <div class="product-content">
  <h2>${element.title}</h2>
  <p>${element.description}</p>
  <p class="price">From $${element.price} or $${Math.floor(
      element.price / 24
    )}/mo. for 24 mo.*</p>
  </div>
  </a>
  `;
    let item = document.querySelectorAll(".product");
    item.forEach((ele) => {
      ele.addEventListener("click", ()=>{
        sendData(element.type)
        console.log(element.type); 
      });
    });
  });
}
