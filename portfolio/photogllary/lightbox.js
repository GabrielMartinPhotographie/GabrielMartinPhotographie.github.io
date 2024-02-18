document.addEventListener("DOMContentLoaded", function () {
  // Attendez que le DOM soit entièrement chargé
  var galleryItems = document.querySelectorAll(".gallery-image");

  // Parcourez toutes les images et ajoutez l'événement onclick
  galleryItems.forEach(function (item) {
      item.addEventListener("click", function () {
          openLightboxWithWatermark(item.src);
      });
  });
});

function openLightboxWithWatermark(imgSrc) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  // Ajoutez le filigrane au SRC de l'image
  var watermark = "Watermark Text";
  lightboxImg.src = addWatermark(imgSrc, watermark);

  lightbox.style.display = 'flex';
}

function addWatermark(imgSrc, watermark) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');

  var img = new Image();
  img.src = imgSrc;

  canvas.width = img.width;
  canvas.height = img.height;

  context.drawImage(img, 0, 0);

  context.font = '20px Arial';
  context.fillStyle = 'rgba(255, 255, 255, 0.5)';
  context.fillText(watermark, canvas.width - 200, canvas.height - 20);

  var watermarkedImgSrc = canvas.toDataURL('image/jpeg');

  return watermarkedImgSrc;
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  lightbox.style.display = 'none';
}
