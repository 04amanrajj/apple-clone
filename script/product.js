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

const productType = localStorage.getItem("productType").trim();
console.log(productType);

const productName = document.querySelectorAll(".product-name");
productName.forEach((element) => {
  element.textContent = productType;
});

const productVideo = document.querySelector(".product-video");
productVideo.src = `/images/iphone-page/${productType.toLocaleLowerCase()}.mp4`;

productVideo.onerror = () => {
  document.querySelector(".video").innerHTML = "";
};

let baseUrl = serverConfig();
baseUrl = `${baseUrl}/products?type_like=${productType || "accessories"}`;

// Fetch data from the API
async function fetchData() {
  loading();
  try {
    let data = await fetch(baseUrl);
    data = await data.json();
    data.reverse();
    display(data);
    stopLoading();
  } catch (error) {
    tostTopEnd.fire({
      icon: "error",
      title: `Server error: ${error.message}`,
    });
    stopLoading()
  }
}
fetchData();

//Display products by names
function display(data) {
  data.forEach((element) => {
    document.querySelector(".products").innerHTML += `
    <div class="device">
        <div>
            <img src="${element.image}" alt="${element.title}" />
        </div>
        <div>
            <h1>${element.title}</h1>
            <div class="bottom-section">
                <div class="info">
                    <p>${element.description}</p>
                    <h3>$${element.price}</h3>
                </div>
                <a href="#" Onclick=myID(${element.id}) class="view-btn">View</a>
            </div>
        </div>
    </div>`;
  });
}

// clicked product id
window.myID = async function (id) {
  localStorage.setItem("id", id);
  loading()
  window.location.href = "/routes/detail.html";
};
