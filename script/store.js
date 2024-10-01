import { tostTopEnd, slide } from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
header();
footer();
slide();

let baseUrl = "http://localhost:4000/products";
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
    product.innerHTML += `
  <a href="/routes/iphonestore.html" class="product">
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
  });
}
