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
}
