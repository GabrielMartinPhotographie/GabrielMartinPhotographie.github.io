document.addEventListener("DOMContentLoaded", function () {
  var galleryItems = document.querySelectorAll(".gallery-image");
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var currentIndex = 0;
  var itemsPerPage = 20;
  var currentPage = 1;
  var totalPages = Math.ceil(images.length / itemsPerPage);

  // Afficher la première page au chargement
  showPage(currentPage);

  galleryItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      currentIndex = (currentPage - 1) * itemsPerPage + index;
      openLightbox(images[currentIndex]);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowLeft") {
      navigateImages(-1);
    } else if (event.key === "ArrowRight") {
      navigateImages(1);
    }
  });

  function openLightbox(imgSrc) {
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
  }

  function navigateImages(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
      currentIndex = 0;
    }

    openLightbox(images[currentIndex]);
  }

  function showPage(page) {
    currentPage = page;
    var start = (currentPage - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var currentImages = images.slice(start, end);

    // Afficher les images de la page actuelle
    galleryItems.forEach(function (item, index) {
      if (currentImages[index]) {
        item.src = currentImages[index];
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Pagination : créer des boutons pour chaque page
  var paginationContainer = document.getElementById('pagination-container');
  for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', function () {
      showPage(parseInt(this.textContent));
    });
    paginationContainer.appendChild(pageButton);
  }
});
