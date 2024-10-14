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

  let baseUrl = serverUrl;
  return baseUrl;
}

// loading screen
function loading() {
  const loadingHTML = document.querySelector(".loading-screen");
  loadingHTML.innerHTML = `
 <div class="loading-popup">
    <div class="spinner"></div>
    <h1>Loading...</h1>
</div>

<style>
.loading-popup {
    z-index: 100;
    width: 100%;
    top: 0;
    height: 100%;
    backdrop-filter: blur(8px);
    display: flex;
    position:absolute;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.spinner {
    border: 10px solid rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    border-top-color: black;
    animation: spin 1s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
}

h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
    margin-top: 20px;
    font-size: 1.5rem;
    color: #000;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}
</style>
`;
  
}

function stopLoading() {
  let loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.innerHTML=null
}

export {
  tostTopEnd,
  tostBottomEnd,
  isUserLoggedin,
  serverConfig,
  slide,
  loading,
  stopLoading
};
