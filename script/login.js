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
  checkUser(baseUrl, user);
});

// POST data to the API
async function postData(url, user) {
  try {
    let data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    data = await data.json();

    // console.log(data.id); USERID
  } catch (error) {
    console.log(error);
  }
}
async function checkUser(url, user) {
  try {
    let data = await fetch(url);
    data = await data.json();

    data.forEach((element) => {
      if (
        element.username === user.username &&
        element.password === user.password
      ) {
        console.log(element);
        let url = baseUrl + "/" + element.id;
        alert("Login successful!");
        window.location.href = "/routes/dashboard.html";
      }
    });
  } catch (error) {
    console.log(error);
  }
}
