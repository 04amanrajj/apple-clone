import { slide } from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
header();
footer();
slide();

let id = localStorage.getItem("id");
let baseUrl = "http://localhost:4000/products/" + id;
let iphones = document.querySelector(".iphones");

async function getInfo(url) {
  let data = await fetch(url);
  data = await data.json();
  console.log(data)
}
getInfo(baseUrl);

