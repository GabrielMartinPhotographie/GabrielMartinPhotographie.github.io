document.addEventListener("DOMContentLoaded", function () {
  var galleryItems = document.querySelectorAll(".gallery-image");
  var lightbox = document.getElementById('lightbox');

  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      openLightbox(item.src);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
});

function openLightbox(imgSrc) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  lightboxImg.src = imgSrc;
  lightbox.style.display = 'flex';

  // Ajoutez un écouteur d'événements pour la touche "Échap" lorsqu'il est ouvert
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}