document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item"); // Orthographe corrigée
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector("#lightbox-image");
  const closeBtn = document.querySelector("#close-btn");

  galleryItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      console.log(event.target.alt);
      const fullSizeSrc = event.target.src.replace("-thumbnail", ""); // Utilise event.target pour cibler l'image cliquée
      lightboxImage.src = fullSizeSrc;
      lightbox.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    console.log("Close Btn");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});


const x = 2;

if( 1<x<2 )
  console.log("yeah");
