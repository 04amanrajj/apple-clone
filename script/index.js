import { slide } from "/utils/utils.js";
import { header,footer } from "/resources/preHtml.js";
header()
footer()
slide()

const images = [
    "/images/slideshow.jpg",
    "/images/slideshow_1.jpg",
    "/images/slideshow_2.jpg",
    "/images/slideshow_3.jpg",
    "/images/slideshow_4.jpg",
    "/images/slideshow_5.jpg",
    "/images/slideshow_6.jpg",
    "/images/slideshow_7.jpg",
    "/images/slideshow_8.jpg",
    "/images/slideshow_9.jpg",
  ];

  let index = 0;
  const slideshowImage1 = document.getElementById("slideshow-image-1");
  const slideshowImage2 = document.getElementById("slideshow-image-2");
  let activeImage = slideshowImage1;
  let nextImage = slideshowImage2;

  setInterval(() => {
    nextImage.src = images[(index + 1) % images.length];

    activeImage.classList.remove("active");
    activeImage.classList.add("inactive");

    nextImage.classList.remove("inactive");
    nextImage.classList.add("active");
    [activeImage, nextImage] = [nextImage, activeImage];
    index = (index + 1) % images.length;
  }, 3000);