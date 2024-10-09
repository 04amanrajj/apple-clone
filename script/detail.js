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
isUserLoggedin();
footer();
slide();

// main code
let id = localStorage.getItem("id");
let baseUrl = serverConfig() + "/products/" + id;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let productImg = document.querySelector(".device-img img");
let productName = document.getElementsByClassName("name");
let description = document.querySelector(".description");
let topPrice = document.querySelector(".price");
let buyBtn = document.querySelector(".buy button");
let productInfo;

// Fetching data using id and baseurl
loading()
try {
  const response = await fetch(baseUrl);
  const result = await response.json();
  console.log(result);
  productInfo = result;
  stopLoading()
} catch (error) {
  tostTopEnd.fire({
    icon: "error",
    title: `Server error: ${error.message}`,
  });
  stopLoading()
}

// Update data on DOM
productImg.src = productInfo.image;
for (let i of productName) {
  i.textContent = productInfo.title;
}
description.textContent = productInfo.description;
topPrice.innerHTML = `From $${productInfo.price} or $${Math.floor(
  productInfo.price / 24
)}/mo. per month for 24mo.months`;

// Add event listener to the buy button
buyBtn.addEventListener("click", () => {
  loading()
  if (!cart.find((item) => item === id)) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    stopLoading()
    tostTopEnd.fire({
      icon: "success",
      title: "Added to cart",
    });
  } else {
    tostTopEnd.fire({
      icon: "info",
      title: "Already in cart",
    });
    stopLoading()
  }
});
