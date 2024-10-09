import {
  tostTopEnd,
  isUserLoggedin,
  loading,
  stopLoading,
  serverConfig,
} from "/utils/utils.js";
isUserLoggedin();

let baseUrl = serverConfig() + "/products";
let products = document.getElementById("products");
let searchInput = document.getElementById("search");
let listProducts = document.getElementById("list-products");
let addProduct = document.getElementById("add-product");
let removeProduct = document.getElementById("remove-product");

// Refresh product list
async function renderData() {
  loading();
  try {
    let response = await fetch(baseUrl);
    response = await response.json();
    stopLoading();
    displayProducts(response);
    tostTopEnd.fire({
      icon: "success",
      title: "Store Refreshed!",
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    tostTopEnd.fire({
      icon: "error",
      title: "Failed to fetch products!",
    });
  }
}

// Search for products
searchInput.addEventListener("input", async function (event) {
  let searchValue = event.target.value.trim();
  let data = await fetch(`${baseUrl}?title_like=${searchValue}`);
  data = await data.json();
  displayProducts(data);
});

// display products on the page
function displayProducts(data) {
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
  // Attach event listeners for delete and edit buttons
  let deleteProduct = document.querySelectorAll(".delete-button");
  let updateProduct = document.querySelectorAll(".edit-button");

  deleteProduct.forEach((ele, index) => {
    ele.addEventListener("click", async () => {
      let url = baseUrl + "/" + data[index].id;
      try {
        let response = await fetch(url, { method: "DELETE" });
        if (response.ok) {
          tostTopEnd.fire({
            icon: "info",
            title: "Product Deleted!",
          });
          renderData();
        }
      } catch (error) {
        tostTopEnd.fire({
          icon: "error",
          title: error,
        });
      }
    });
  });

  updateProduct.forEach((ele, index) => {
    ele.addEventListener("click", async () => {
      let url = baseUrl + "/" + data[index].id;

      // Pre-fill the form fields with the current product values
      Swal.fire({
        title: "Edit Product",
        html: `
            <select id="swal-type" required>
                <option value="mobile" ${
                  data[index].type === "mobile" ? "selected" : ""
                }>Mobile</option>
                <option value="pc" ${
                  data[index].type === "pc" ? "selected" : ""
                }>Mac</option>
                <option value="watch" ${
                  data[index].type === "watch" ? "selected" : ""
                }>Watch</option>
                <option value="accessories" ${
                  data[index].type === "accessories" ? "selected" : ""
                }>Accessories</option>
            </select>
            <input type="text" id="swal-title" class="swal2-input" placeholder="Product Name" value="${
              data[index].title
            }" />
            <input type="text" id="swal-description" class="swal2-input" placeholder="Description" value="${
              data[index].description
            }" />
            <input type="url" id="swal-imageUrl" class="swal2-input" placeholder="Image URL" value="${
              data[index].image
            }" />
            <input type="number" id="swal-price" class="swal2-input" placeholder="Price" value="${
              data[index].price
            }" />
          `,
        confirmButtonText: "Update Product",
        showCancelButton: true,
        preConfirm: () => {
          let type = document.getElementById("swal-type").value;
          let title = document.getElementById("swal-title").value;
          let image = document.getElementById("swal-imageUrl").value;
          let description = document.getElementById("swal-description").value;
          let price = document.getElementById("swal-price").value;

          if (!type || !title || !description || !price) {
            Swal.showValidationMessage("Please fill out all fields.");
            return false;
          }

          return { type, title, image, description, price };
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          let updatedProduct = result.value;

          try {
            let response = await fetch(url, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedProduct),
            });

            if (!response.ok) {
              throw new Error("Failed to update product.");
            }

            tostTopEnd.fire({
              icon: "success",
              title: "Product Updated",
            });

            renderData(); // Refresh the product list
          } catch (error) {
            console.error("Error updating product:", error);
            tostTopEnd.fire({
              icon: "error",
              title: "Error: " + error.message,
            });
          }
        }
      });
    });
  });
}

// Display products
listProducts.addEventListener("click", async function () {
  products.style.display = "grid";
  renderData();
});

// Add new product
addProduct.addEventListener("click", function () {
  Swal.fire({
    title: "Add New Product",
    html: `
        <select name="" id="swal-type" required>
            <option value="iphone">iPhone</option>
            <option value="ipad">iPad</option>
            <option value="mac">Mac</option>
            <option value="watch">Watch</option>
            <option value="accessories">Accessories</option>
        </select>
        <input type="text" id="swal-title" class="swal2-input" placeholder="Product Name" />
        <input type="text" id="swal-description" class="swal2-input" placeholder="Description" />
        <input type="url" id="swal-imageUrl" class="swal2-input" placeholder="Image URL" />
        <input type="number" id="swal-price" class="swal2-input" placeholder="Price" />
      `,
    confirmButtonText: "Add Product",
    showCancelButton: true,
    preConfirm: () => {
      let type = document.getElementById("swal-type").value;
      let title = document.getElementById("swal-title").value;
      let image = document.getElementById("swal-imageUrl").value;
      let description = document.getElementById("swal-description").value;
      let price = document.getElementById("swal-price").value;

      if (!type || !title || !description || !price) {
        Swal.showValidationMessage("Please fill out all fields.");
        return false;
      }

      return { type, title, image, description, price };
    },
  }).then(async (result) => {
    if (result.isConfirmed) {
      let newProduct = result.value;
      try {
        await fetch(baseUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProduct),
        });
        tostTopEnd.fire({
          icon: "success",
          title: "Product Launched",
        });
        renderData();
      } catch (error) {
        tostTopEnd.fire({
          icon: "error",
          title: error,
        });
      }
    }
  });
});

// Remove product by ID
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
  }).then(async (result) => {
    if (result.isConfirmed) {
      let delID = result.value;
      let delUrl = `${baseUrl}/${delID}`;
      try {
        await fetch(delUrl, { method: "DELETE" });
        tostTopEnd.fire({
          icon: "info",
          title: "Product Discontinued!",
        });
        renderData();
      } catch (error) {
        tostTopEnd.fire({
          icon: "error",
          title: error,
        });
      }
    }
  });
});
