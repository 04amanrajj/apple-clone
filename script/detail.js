import { slide } from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
header();
footer();
slide();

// main code

let id = localStorage.getItem("id");
let baseUrl = "http://localhost:4000/products/" + id;
let productImg = document.querySelector(".device-img img");
let productName = document.getElementsByClassName("name");
let topPrice = document.querySelector(".price");
let localData;

try {
  const response = await fetch(baseUrl);
  const result = await response.json();
  console.log(result);
  localData = result;
} catch (error) {
  console.log(error);
}
console.log(productName);
productImg.src = localData.image;
for (let i of productName) {
  i.textContent = localData.title;
}

topPrice.innerHTML = `From $${localData.price} or $${Math.floor(
  localData.price / 24
)}/mo. per month for 24mo.months`
