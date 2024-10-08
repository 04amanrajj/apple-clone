function slide() {
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
  document.addEventListener("DOMContentLoaded", function () {
    const slideElements = document.querySelectorAll(".auto-slide-up");

    slideElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Check if the element is in the viewport
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
  timer: 2000,
  timerProgressBar: false,
});

// authantication
function isUserLoggedin() {
  document.addEventListener("DOMContentLoaded", function () {
    let loggedInUser = localStorage.getItem("loggedInUser");
    // console.log(savedUser);
    if (loggedInUser) {
      let loginLink = document.querySelector(".user");
      if (loginLink) {
        loginLink.textContent = loggedInUser;
        loginLink.style.display = "flex";
      }
    }
  });
}

window.sendData = (element) => {
  const text = element.type;
  localStorage.setItem("productType", text);
  console.log(element);
};

function serverConfig() {
  let serverUrl = "https://mock-server-b514.onrender.com";
  let devUrl = "http://localhost:4000";

  let baseUrl = devUrl;
  return baseUrl;
}

export { tostTopEnd, tostBottomEnd, isUserLoggedin, serverConfig, slide };
