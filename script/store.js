import {
  tostTopEnd,
  slide,
  isUserLoggedin,
  serverConfig,
  loading,
  stopLoading,
} from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
header();
footer();
slide();
isUserLoggedin();

let currentPage = 1;
let baseUrl = `${serverConfig()}/products?_limit=12&_page=${currentPage}`;
console.log(baseUrl);
fetchData(baseUrl);

// Fetch data from the API
async function fetchData(baseUrl) {
  loading()
  try {
    let data = await fetch(baseUrl);
    data = await data.json();
    display(data);
    stopLoading()
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
  <a href="/routes/product.html" class="product">
  <img src="${element.image}" alt="${element.title}" />
  <div class="product-content">
  <h2>${element.title}</h2>
  <p>${element.description}</p>
  <p class="price">From $${element.price} or $${Math.floor(
      element.price / 24
    )}/mo. for 24 mo.*</p>
    <p class="type">${element.type}</p>
  </div>
  </a>
  `;
    // console.log(element.type);
    let item = document.querySelectorAll(".product");
    item.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        // e.preventDefault()
        localStorage.setItem(
          "productType",
          ele.querySelector(".type").textContent
        );
      });
    });
  });
}

let priceSortButton = document.getElementById("price");
let searchInput = document.getElementById("search-area");
let option = "asc";

// Function to update and fetch data
const updateBaseUrlAndFetchData = () => {
  const baseUrl = `${serverConfig()}/products?_limit=12&&title_like=${searchInput.value.trim()}&_sort=price&_order=${option}&_page=${currentPage}`;
  console.log(baseUrl);
  fetchData(baseUrl);
};

// Sort by price
priceSortButton.addEventListener("change", () => {
  option = priceSortButton.value || "asc";
  currentPage = 1;
  updateBaseUrlAndFetchData();
});

// search
let searchButton=document.querySelector(".search-button")
searchButton.addEventListener("click", () => {
  currentPage = 1;
  updateBaseUrlAndFetchData();
});

// next page button
let nextPageButton = document.querySelector(".next");
nextPageButton.addEventListener("click", () => {
  currentPage++; // Move to the next page
  if (currentPage > 4) currentPage = 1;
  updateBaseUrlAndFetchData();
  console.log(currentPage);
});

// previous page button
let previousPageButton = document.querySelector(".last");
previousPageButton.addEventListener("click", () => {
  currentPage--;
  if (currentPage < 1) currentPage = 1; // prevent going below page 1
  updateBaseUrlAndFetchData();
  console.log(currentPage);
});
