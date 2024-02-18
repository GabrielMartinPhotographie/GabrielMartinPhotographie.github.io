document.addEventListener("DOMContentLoaded", function () {
  // Attendez que le DOM soit entièrement chargé
  var galleryItems = document.querySelectorAll(".gallery-image");

  // Parcourez toutes les images et ajoutez l'événement onclick
  galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
          openLightbox(item.src);
      });
  });
});

function openLightbox(imgSrc) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  lightboxImg.src = imgSrc;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
