import { tostTopEnd } from "/utils/utils.js";

let baseUrl = "http://localhost:4000/products";

let products = document.getElementById("products");
let searchInput = document.getElementById("search");
let listProducts = document.getElementById("list-products");
let addProduct = document.getElementById("add-product");
let removeProduct = document.getElementById("remove-product");
let formClose = document.querySelector("form button");
let form = document.querySelector("form");
let deleteDiv = document.querySelector(".delete");
let deleteID = document.querySelector(".delete-id");
let deleteSubmitBtn = document.querySelector(".delete-btn");
let updateProduct = document.querySelector("button");
let removeButton = document.querySelector(".remove-button");
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
        <img src="${element.image}" width="300px" height="400px" alt="" />
        <p>${element.description}</p>
        <p>$${element.price}</p>
        <p>ID:${element.id}</p>
        <div>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
        </div>
        </div>`;
  });
}

// display products
listProducts.addEventListener("click", async function () {
  deleteDiv.style.display = "none";
  products.style.display = "grid";
  document.querySelector("form").style.display = "none";
  tostTopEnd.fire({
    icon: "success",
    title: "Store Refreshed!",
  });

  let data = await apiData();
  displayProducts(data);
});

// Add new product
addProduct.addEventListener("click", function () {
  Swal.fire({
    title: "Add New Product",
    html: `
        <input type="text" id="swal-title" class="swal2-input" placeholder="Product Name" />
        <input type="text" id="swal-description" class="swal2-input" placeholder="Description" />
        <input type="url" id="swal-imageUrl" class="swal2-input" placeholder="image url" >
        <input type="number" id="swal-price" class="swal2-input" placeholder="Price" />
      `,
    confirmButtonText: "Add Product",
    showCancelButton: true,
    preConfirm: () => {
      let title = document.getElementById("swal-title").value;
      let image = document.getElementById("swal-imageUrl").value;
      let description = document.getElementById("swal-description").value;
      let price = document.getElementById("swal-price").value;

      if (!title || !description || !price) {
        Swal.showValidationMessage("Please fill out all fields.");
        return false;
      }

      return { title, image, description, price };
    },
  }).then(async (result) => {
    let obj = {
      title: result.value.title,
      image: result.value.image,
      description: result.value.description,
      price: result.value.price,
    };
    fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    tostTopEnd.fire({
      icon: "success",
      title: "Product Launched",
    });

    let data = await apiData();
    displayProducts(data);
  });
});

// remove product
removeProduct.addEventListener("click", function () {
  Swal.fire({
    title: "Remove Product",
    input: "number",
    inputLabel: "Enter Product ID",
    inputPlaceholder: "Product ID",
    showCancelButton: true,
    confirmButtonText: "Delete",
    preConfirm: (id) => {
      if (!id) {
        Swal.showValidationMessage("Need a product ID.");
        return false;
      }
      return id;
    },
  }).then((result) => {
    if (result.isConfirmed) {
      let delID = result.value;
      let delUrl = `${baseUrl}/${delID}`;
      fetch(delUrl, {
        method: "DELETE",
      }).then(async () => {
        tostTopEnd.fire({
          icon: "info",
          title: "Product Discontinued!",
        });

        let data = await apiData();
        displayProducts(data);
      });
    }
  });
});

// update a product
updateProduct.addEventListener("click",async()=>{
    console.log("JI")
})