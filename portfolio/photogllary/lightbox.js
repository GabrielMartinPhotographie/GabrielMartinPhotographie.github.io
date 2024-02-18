// lightbox.js

function openLightboxWithWatermark(imgSrc) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  // Ajoutez le filigrane au SRC de l'image
  var watermark = "Watermark Text";
  lightboxImg.src = addWatermark(imgSrc, watermark);

  // Ajoutez la classe pour appliquer les styles CSS
  lightboxImg.classList.add('lightbox-content');

  lightbox.style.display = 'flex';
}