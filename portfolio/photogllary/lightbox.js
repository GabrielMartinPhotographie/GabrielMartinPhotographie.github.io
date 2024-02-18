function openLightboxWithWatermark(imgSrc) {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  // Ajoutez le filigrane au SRC de l'image
  var watermark = "Watermark Text";
  lightboxImg.src = addWatermark(imgSrc, watermark);

  // Ajoutez la classe pour appliquer les styles CSS
  lightboxImg.classList.add('lightbox-content');

  // Ajoutez la classe 'initial' pour masquer la lightbox au chargement de la page
  lightbox.classList.add('initial');

  lightbox.style.display = 'flex';

  // Supprimez la classe 'initial' après un court délai pour afficher correctement la lightbox
  setTimeout(function () {
      lightbox.classList.remove('initial');
  }, 100);
}

function closeLightbox() {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');

  lightbox.style.display = 'none';
  // Ajoutez la classe 'initial' lors de la fermeture pour masquer correctement la lightbox
  lightbox.classList.add('initial');
}
