import { slide, isUserLoggedin, serverConfig } from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
header();
isUserLoggedin();
footer();
slide();

const productType = localStorage.getItem("productType").trim();
console.log(productType);

const productName = document.querySelectorAll(".product-name");
productName.forEach(element => {
  element.textContent = productType
});;

const productVideo = document.querySelector(".product-video");
productVideo.src = `/images/iphone-page/${productType.toLocaleLowerCase()}.mp4`;

productVideo.onerror = () => {
  document.querySelector(".video").innerHTML = "";
};

let baseUrl = serverConfig();
baseUrl = `${baseUrl}/products?type_like=${productType|| "accessories"}`;
console.log(baseUrl);
// Fetch data from the API
async function apiData() {
  let data = await fetch(baseUrl);
  data = await data.json();
  display(data);
}
apiData();

//Display products by names
function display(data) {
  data.reverse();
  data.forEach((element) => {
    loadData(element);
  });
}

// function to add data in dom
function loadData(data) {
  document.querySelector(".products").innerHTML += `
<div class="device">
    <div>
        <img src="${data.image}" alt="${data.title}" />
    </div>
    <div>
        <h1>${data.title}</h1>
        <div class="bottom-section">
            <div class="info">
                <p>${data.description}</p>
                <h3>$${data.price}</h3>
            </div>
            <a href="#" Onclick=myID(${data.id}) class="view-btn">View</a>
        </div>
    </div>
</div>`;
}

// clicked product id
window.myID = async function (id) {
  // let data = await fetch(baseUrl + "/" + id);
  // data = await data.json();
  // console.log(data);
  localStorage.setItem("id", id);
  window.location.href = "/routes/detail.html";
};
