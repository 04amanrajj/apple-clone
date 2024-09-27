import { slide } from "/utils/utils.js";
import { header, footer } from "/resources/preHtml.js";
header();
slide();

let baseUrl = "http://localhost:4000/users";
let username = document.getElementById("username");
let password = document.getElementById("password");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let user = { username: username.value, password: password.value };
  postData(baseUrl, user);
});

// POST data to the API
function postData(url, user) {
    
}
console.log(postData());
