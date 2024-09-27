import { tostTopEnd, slide } from "/utils/utils.js";
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

    tostTopEnd.fire({
      icon: "info",
      title: "User created successfully",
    });
    console.log("User created successfully", data);
  } catch (error) {
    console.log(error);
  }
}

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
        window.location.href = "/routes/dashboard.html";
      }
    });

    if (!userFound) {
      swal.fire({
        title: "New User? Let's create your account",
        showCancelButton: true,
        confirmButtonText: "Create Account",
      });

      setTimeout(() => {
        Swal.fire({
          title: "Create a new account",
          html: `
            <input type="text" id="swal-username" class="swal2-input" placeholder="Email or Phone Number" />
            <input type="password" id="swal-password" class="swal2-input" placeholder="Password" />
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
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  }
}
