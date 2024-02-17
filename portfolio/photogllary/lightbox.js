// lightbox.js

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
