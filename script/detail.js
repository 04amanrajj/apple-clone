import { tostTopEnd, slide,isUserLoggedin } from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
header();
isUserLoggedin()
footer();
slide();

// main code
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let id = localStorage.getItem("id");
let baseUrl = "https://mock-server-b514.onrender.com/products/" + id;
let productImg = document.querySelector(".device-img img");
let productName = document.getElementsByClassName("name");
let description = document.querySelector(".description");
let topPrice = document.querySelector(".price");
let buyBtn = document.querySelector(".buy button");
let localData;

// Fetching data using id and baseurl
try {
    const response = await fetch(baseUrl);
    const result = await response.json();
    console.log(result);
    localData = result;

    tostTopEnd.fire({
        icon: "success",
        title: "DOM Updated",
    });
} catch (error) {
    tostTopEnd.fire({
        icon: "error",
        title: error,
    });
}

// Update data on DOM
productImg.src = localData.image;
for (let i of productName) {
    i.textContent = localData.title;
}
description.textContent = localData.description;
topPrice.innerHTML = `From $${localData.price} or $${Math.floor(
    localData.price / 24
)}/mo. per month for 24mo.months`;

// Add event listener to the buy button
buyBtn.addEventListener("click", () => {
    if (!cart.find(item => item === id)) {
        cart.push(id);
        localStorage.setItem("cart", JSON.stringify(cart));
        tostTopEnd.fire({
            icon: "success",
            title: "Added to cart",
        });
    } else {
        tostTopEnd.fire({
            icon: "info",
            title: "Already in cart",
        });
    }
});
