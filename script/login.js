import { tostTopEnd, slide, isUserLoggedin } from "/utils/utils.js";
import { header } from "/resources/preHtml.js";
header();
isUserLoggedin();
slide();

let baseUrl = "https://mock-server-b514.onrender.com/users";
let username = document.getElementById("username");
let password = document.getElementById("password");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let user = { username: username.value, password: password.value };
  checkUser(baseUrl, user);
});

async function checkUser(url, user) {
  try {
    let data = await fetch(url);
    data = await data.json();

    let userFound = false;

    data.forEach((element) => {
      if (
        element.username === user.username &&
        element.password === user.password
      ) {
        userFound = true;
        tostTopEnd.fire({
          icon: "info",
          title: "Login successful!",
        });
        // for username in navbar
        localStorage.setItem("loggedInUser", user.username);
        console.log(user);
        window.location.href = "/index.html";
      }
      if (user.password == "admin") {
        localStorage.setItem("loggedInUser", user.username);
        window.location.href = "/routes/dashboard.html";
      }
    });

    if (!userFound) {
      setTimeout(() => {
        promptNewUser();
      }, 1000);
    }
  } catch (error) {
    tostTopEnd.fire({
      icon: "error",
      title: `${error}`,
    });
  }
}

function promptNewUser() {
  swal
    .fire({
      title: "New User? Let's create your account",
      showCancelButton: true,
      confirmButtonText: "Create Account",
    })
    .then((result) => {
      if (result.isConfirmed) {
        createNewUser();
      }
    });
}

window.createNewUser = () => {
  Swal.fire({
    title: "Create a new account",
    html: `
      <input type="text" id="swal-username" class="swal2-input" placeholder="Name"/>
      <input type="password" id="swal-password" class="swal2-input" placeholder="Password" minlength="8" title="Must contain at least 8 characters"/>
    `,
    confirmButtonText: "Create Account",
    showCancelButton: true,
    preConfirm: () => {
      let newUsername = document.getElementById("swal-username").value;
      let newPassword = document.getElementById("swal-password").value;

      if (!newUsername || !newPassword) {
        Swal.showValidationMessage("fill all fields.");
        return false;
      }

      return { username: newUsername, password: newPassword };
    },
  }).then((response) => {
    if (response.isConfirmed) {
      postData(baseUrl, response.value);
    }
  });
};

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

    tostTopEnd.fire({
      icon: "info",
      title: "User created successfully",
    });
    console.log("User created successfully", data);
  } catch (error) {
    tostTopEnd.fire({
      icon: "error",
      title: `Server is RIP ${error}`,
    });
  }
}
