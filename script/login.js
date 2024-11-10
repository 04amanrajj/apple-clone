import {
  tostTopEnd,
  slide,
  isUserLoggedin,
  serverConfig,
  loading,
  stopLoading,
} from "/utils/utils.js";
import { header } from "/resources/preHtml.js";
header();
isUserLoggedin();
slide();

// ------------->HTML
let baseUrl = serverConfig();
let username = document.getElementById("username");
let password = document.getElementById("password");
let loginFormData = document.querySelector("form");

// -------------getting login data
loginFormData.addEventListener("submit", function (e) {
  e.preventDefault();
  let userLoginInfo = { username: username.value, password: password.value };
  login(userLoginInfo);
});

// ------------finding data from server
async function login(userLoginInfo) {
  loading();
  try {
    let data = await fetch(
      `${baseUrl}/users?username=${userLoginInfo.username}&password=${userLoginInfo.password}` //getting user from api
    );
    data = await data.json();
    stopLoading();
    console.log(data);
    if (data.length != 0) {
      tostTopEnd.fire({
        icon: "success",
        title: "Login successful!",
      });
      localStorage.setItem("loggedInUser", userLoginInfo.username); // for username in navbar
      window.location.href = "/index.html"; //redirect when user found
    } else {
      tostTopEnd.fire({
        icon: "error",
        title: "User not found",
      });
    }
  } catch (error) {
    stopLoading();
    tostTopEnd.fire({
      icon: "error",
      title: `Server error: ${error.message}`, //error if server problem
    });
  }
}

// ------------creating new user 
window.signup = () => {
  Swal.fire({
    title: "Create a new account",
    html: `
      <input type="text" id="swal-username" class="swal2-input" placeholder="Name"/>
      <input type="password" id="swal-password" class="swal2-input" placeholder="Password" minlength="8" title="Must contain at least 8 characters"/>
    `,
    confirmButtonText: "Create Account",
    showCancelButton: true,
    preConfirm: () => {
      let username = document.getElementById("swal-username").value;
      let password = document.getElementById("swal-password").value;

      if (!username || !password) {
        Swal.showValidationMessage("fill all fields.");
        return false;
      }

      return { username, password };
    },
  }).then(async (response) => {
    if (response.isConfirmed) {
      let newUserInfo = response.value;
      loading();
      try {
        let data = await fetch(`${baseUrl}/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserInfo),
        });
        data = await data.json();
        console.log(data);
        stopLoading();
        tostTopEnd.fire({
          icon: "info",
          title: "User created successfully",
        });
      } catch (error) {
        stopLoading();
        tostTopEnd.fire({
          icon: "error",
          title: `Server error: ${error.message}`,
        });
      }
    }
  });
};

// ------------admin login
let adminLoginButton = document.querySelector(".admin-signin");

adminLoginButton.addEventListener("click", async (e) => {
  let adminLoginInfo = { username: username.value, password: password.value };
  if (!adminLoginInfo.username && !adminLoginInfo.password) {
    return tostTopEnd.fire({
      icon: "warning",
      title: "Fill your details first ",
    });
  }
  loading();
  try {
    let adminData = await fetch(
      `${baseUrl}/admin?username=${adminLoginInfo.username}&password=${adminLoginInfo.password}`
    );
    adminData = await adminData.json();
    stopLoading();
    if (adminData.length == 0) {
      return tostTopEnd.fire({
        icon: "error",
        title: "You are not an admin",
      });
    }
    console.log(adminData);
  } catch (error) {
    tostTopEnd.fire({
      icon: "error",
      title: `Server error: ${error.message}`,
    });
    stopLoading();
  }

  e.preventDefault();
  Swal.fire({
    title: "Enter the security code",
    html: `
      <input type="text" id="swal-code" class="swal2-input" placeholder="security code"/>
    `,
    confirmButtonText: "Check",
    showCancelButton: true,
    preConfirm: () => {
      let security = document.getElementById("swal-code").value;

      if (!security) {
        Swal.showValidationMessage("enter the code.");
        return false;
      }

      return security;
    },
  }).then((response) => {
    if (response.value.toLowerCase().trim() == "admin") {
      window.location.href = "/routes/dashboard.html";
    } else {
      tostTopEnd.fire({
        icon: "error",
        title: "Code not valid",
      });
    }
  });
});
stopLoading();
