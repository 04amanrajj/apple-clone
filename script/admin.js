let baseUrl = "http://localhost:4000/products";

let products = document.getElementById("products");
let searchInput = document.getElementById("search");
let listProducts = document.getElementById("list-products");
let addProduct = document.getElementById("add-product");
let removeProduct = document.getElementById("remove-product");
let formClose = document.querySelector("form button");
let form = document.querySelector("form");

// fetch data from the API to display products
let apiData = async function () {
  let data = await fetch(baseUrl);
  data = await data.json();
  return data;
};

// Search for products
searchInput.addEventListener("input", async function (event) {
  let data = await apiData();
  console.log(data);
  console.log(event.target.value);
  let searchValue = event.target.value.toLowerCase().trim();
  let filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchValue)
  );
  displayProducts(filteredData);
});

// display products on the page
function displayProducts(data) {
  console.log(data);
  products.innerHTML = "";
  data.forEach((element) => {
    products.innerHTML += `
        <div class="product">
        <h2>${element.title}</h2>
        <img src="/images/products/iPhone 4S - Sam's Club.jpeg" width="200px" height="200px" alt="" />
        <p>Description:${element.description}</p>
        <p>Price:${element.price}</p>
        <p>ID:${element.id}</p>
        <div>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
        </div>
        </div>`;
  });
}

listProducts.addEventListener("click", async function () {
  let data = await apiData();
  displayProducts(data);
});

// Add product
addProduct.addEventListener("click", async function () {
  document.querySelector("form").style.display = "flex";
  products.style.display = "none";
});

// Close form
formClose.addEventListener("click", function () {
  document.querySelector("form").style.display = "none";
  products.style.display = "grid";
});

// Add new product
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let productTitle = document.getElementById("title").value;
  let productDescription = document.getElementById("description").value;
  let productPrice = document.getElementById("price").value;
  let obj = {
    title: productTitle,
    description: productDescription,
    price: productPrice,
  };
  console.log(obj);

  fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  });
});
