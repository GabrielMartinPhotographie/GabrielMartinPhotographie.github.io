document.addEventListener("DOMContentLoaded", function () {
  var galleryItems = document.querySelectorAll(".gallery-image");
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  const images = [

"../photogllary/DSC_0358 (1)",
"../photogllary/DSC_0375 (1)",
"../photogllary/DSC_1591",
"../photogllary/DSC_8604",
"../photogllary/DSC_8605",
"../photogllary/DSC_8921",
"../photogllary/DSC_8973",
"../photogllary/DSC_9046",
"../photogllary/DSC_9048",
"../photogllary/DSC_9140",
"../photogllary/DSC_9188 (1)",
"../photogllary/DSC_9279",
"../photogllary/DSC_9616 (2)",
"../photogllary/DSC_9759",
"../photogllary/DSC_9850 (1)",
"../photogllary/DSC_9893 (1)",
"../photogllary/DSC_9911_optimized (1)",
"../photogllary/DSC_0011 (1)",
"../photogllary/DSC_0015 (1)",
"../photogllary/DSC_0016 (1)",
"../photogllary/DSC_0096 (1)",
"../photogllary/DSC_0099 (1)",
"../photogllary/DSC_0104",
"../photogllary/DSC_0127 (1)",
"../photogllary/DSC_0146 (1)",
"../photogllary/DSC_0150 (1)",
"../photogllary/DSC_0151 (1)",
"../photogllary/DSC_0198 (1)",
"../photogllary/DSC_0199 (1)",
"../photogllary/DSC_0201",
"../photogllary/DSC_0238 (1)",
"../photogllary/DSC_0248 (1)",
"../photogllary/DSC_0313 (1)",
"../photogllary/DSC_0332 (1)",

];

var currentIndex = 0;
var itemsPerPage = 24;
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
  console.log('showPage called for page', page);
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