import { slide } from "/utils/utils.js";
import {header,footer} from "/resources/preHtml.js";
header();
footer();
slide();

let baseUrl = "http://localhost:4000/products";
data(baseUrl);
// Fetch data from the API
async function data(baseUrl) {
  try {
    let data = await fetch(baseUrl);
    data = await data.json(); // Convert the response to JSON
    display(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
}
function display(data) {
  let product = document.getElementById("products");
  product.innerHTML = ""; // Clear the existing products
  console.log(data);
  data.forEach((element) => {
    product.innerHTML += `
  <div class="product">
    <img src="/images/products/iPhone 4S - Sam's Club.jpeg" alt="${
      element.title
    }" />
    <div class="product-content">
      <h2>${element.title}</h2>
      <p>${element.description}</p>
      <p class="price">From $${element.price} or $${Math.floor(
      element.price / 24
    )}/mo. for 24 mo.*</p>
    </div>
  </div>
  `;
  });
}
