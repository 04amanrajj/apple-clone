export function slide() {
  window.addEventListener("scroll", function () {
    const slideElements = document.querySelectorAll(".slide-up");

    slideElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight - 100) {
        // Adjust 100 for when the animation starts
        el.classList.add("show"); // Add the show class to trigger the animation
      }
    });
  });
  window.addEventListener("load", function () {
    const slideElements = document.querySelectorAll(".auto-slide-up");

    slideElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (rect.top <= windowHeight - 100) {
        // Adjust 100 for when the animation starts
        el.classList.add("show"); // Add the show class to trigger the animation
      }
    });
  });
}

const tostTopEnd = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: false,
});

const tostBottomEnd = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

// authantication
function isUserLoggedin() {
  document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let savedUser = localStorage.getItem("loggedInUser");
    // console.log(savedUser);
    if (savedUser != null) {
      isUserLoggedin();
      tostTopEnd.fire({
        icon: "success",
        title: "Logged in successfully",
      });
    }

    if (loggedInUser) {
      let loginLink = document.querySelector(".user");
      if (loginLink) {
        loginLink.textContent = loggedInUser;
        loginLink.style.display = "flex";
      }
    }
  });
}
// redirect to shop
function redirect() {
  let input = document.querySelector("#product");
  input.addEventListener("input", () => {
    window.location.href = "shop.html";
  });
}

function showProductPopup(product) {
  console.log(product)
  Swal.fire({
    html: `
    <div class="popup-container">
      <div class="popup-left">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="popup-right">
        <strong>Product:</strong> ${product.name} <br>
        <strong>Price:</strong> Rs. ${product.cost} <br>
        <strong>Discount:</strong> ${product.description} <br>
        <strong>Ratings:</strong> ${product.ratingsContainer || "N/A"} ⭐ (${
      product.ratingsCount || "No reviews"
    })<br><br>
        <button class="popup-btn">Add!</button>
      </div>
    </div>
    `,
    width: "auto",
    showConfirmButton: false,
    showCloseButton: false,
    focusConfirm: true,
  });

  document.querySelector(".popup-btn").addEventListener("click", () => {
    let arr = JSON.parse(localStorage.getItem("cart")) || [];
    arr.push(product);
    localStorage.setItem("cart", JSON.stringify(arr));
    tostTopEnd.fire({
      icon: "success",
      title: "added to box",
    });
  });
}

export {
  tostTopEnd,
  tostBottomEnd,
  isUserLoggedin,
  redirect,
  showProductPopup, 
};