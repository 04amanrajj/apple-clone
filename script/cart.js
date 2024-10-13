import { slide,isUserLoggedin,loading,stopLoading,serverConfig } from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
isUserLoggedin()
header();
footer();
slide();

// ------------HTML
let id = JSON.parse(localStorage.getItem("cart")) || [];
let total = document.querySelector(".total");
let total2 = document.querySelector(".totall");
let checkout = document.querySelectorAll(".checkout");
let device = document.querySelector(".products");
let baseUrl = serverConfig();
let products = [];

// ------------fetch data from url
for (let i of id) {
  loading()
  let data = await fetch(`${baseUrl}/products/${i}`);
  data = await data.json();
  if (data.length != 0) {
    products.push(data);
  }
  stopLoading()
}

// ------------redirect to home if cart data is empty
if (products.length == 0) {
  Swal.fire({
    icon: "info",
    title: "You cart is empty",
    text: "Redirecting to home...",
    timer: 3000,
    showConfirmButton: false,
    timerProgressBar: true,
    allowOutsideClick: false,
  });
  setTimeout(() => {
    window.location.href = "/index.html";
  }, 3000);
}

function updateCart() {
  device.innerHTML = ""; // clear
  let totalPrice = 0; // Initialize total 

  products.forEach((element, index) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img loading="lazy" src="${element.image}" alt="${element.title}" />
        <div class="right">
          <div class="top">
            <h1 class="name">${element.title}</h1>
            <select name="" class="quantity">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <div>
              <h1 class="price">$${element.price}</h1>
              <button class="delete">Remove</button>
            </div>
          </div>
        </div>
      `;

    device.appendChild(productDiv);

    let productQuantity = productDiv.querySelector(".quantity");
    let productPrice = Number(element.price);
    let initialQuantity = productQuantity.value;
    totalPrice += productPrice * initialQuantity;

    updateTotalPrice(totalPrice);

    productQuantity.addEventListener("change", () => {
      let quantity = parseInt(productQuantity.value);
      totalPrice -= productPrice * (initialQuantity - quantity);
      initialQuantity = quantity;
      updateTotalPrice(totalPrice);
    });

    let deleteButton = productDiv.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
      products.splice(index, 1);
      console.log(products);
      localStorage.setItem("cart", JSON.stringify(products));
      updateCart();
    });
  });

  updateTotalPrice(totalPrice);
}

// ------------update price
function updateTotalPrice(totalPrice) {
  total.textContent = `$${totalPrice.toFixed(2)}`;
  total2.textContent = `$${totalPrice.toFixed(2)}`;
}

// ------------check out button
for (let i of checkout) {
  i.addEventListener("click", () => {
    let timerInterval;
    Swal.fire({
      title: "Processing...",
      html: "Wait.",
      timer: 4000,
      timerProgressBar: true,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
        let timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        Swal.fire({
          icon: "success",
          title: "Order placed",
        });
        clearInterval(timerInterval);
        setTimeout(() => {
          localStorage.removeItem("cart");
          updateCart();
          location.reload();
        }, 3000);
      },
    });
  });
}
updateCart();
