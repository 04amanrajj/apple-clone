import { slide } from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
header();
footer();
slide();

let baseUrl = "http://localhost:4000/products";
let iphones = document.querySelector(".iphones");
let mac = document.querySelector(".mac");
let watches = document.querySelector(".watches");

// Fetch data from the API
async function apiData() {
    let data = await fetch(baseUrl);
    data = await data.json();
    display(data);
    return data;
}
apiData();

//Display products by names
function display(data) {
    data.reverse()
  data.forEach(element => {
    // console.log(element)
    if(element.type=="mobile"){
        loadData(element)
    }

  });
}

function loadData(data){
    console.log(data)
    iphones.innerHTML+=`
<div class="mobiles">
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
            <a href="#" class="view-btn">View</a>
        </div>
    </div>
</div>

    `

}