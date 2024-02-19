document.addEventListener("DOMContentLoaded", function () {
  var galleryItems = document.querySelectorAll(".gallery-image");
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  const images = [

    "../Portfolio/9x8_nuit.jpg",
    "../Portfolio/9x8.jpg",
    "../Portfolio/288_nuit.jpg",
    "../Portfolio/AMR_nuit.jpg",
    "../Portfolio/488_nuit_2.jpg",
    "../Portfolio/488.jpg",
    "../Portfolio/Alpine.jpg",
    "../Portfolio/Alpine (2).jpg",
    "../Portfolio/AMG.jpg",
    "../Portfolio/AMR_nuit.jpg",
    "../Portfolio/Apollo (1).jpg",
    "../Portfolio/Apollo (2).jpg",
    "../Portfolio/Aston_Martin.jpg",
    "../Portfolio/Bentley_speed9.jpg",
    "../Portfolio/bentley (1).jpg",
    "../photogllary/Portfolio/bentley (2).jpg",
    "../photogllary/Portfolio/Casque.jpg",
    "../photogllary/Portfolio/Casque2.jpg",
    "../photogllary/Portfolio/Drift.jpg",
    "../photogllary/Portfolio/Drift2.jpg",
    "../photogllary/Portfolio/drift3.jpg",
    "../photogllary/Portfolio/DSC_0201.jpg",
    "../photogllary/Portfolio/DSC_2130.jpg",
    "../photogllary/Portfolio/DSC_2171.jpg",
    "../photogllary/Portfolio/DSC_2281.jpg",
    "../photogllary/Portfolio/DSC_2313.jpg",
    "../photogllary/Portfolio/DSC_2370.jpg",
    "../photogllary/Portfolio/DSC_3782 (1).jpg",
    "../photogllary/Portfolio/DSC_3842.jpg",
    "../photogllary/Portfolio/DSC_4475.jpg",
    "../photogllary/Portfolio/DSC_4579.jpg",
    "../photogllary/Portfolio/DSC_5000.jpg",
    "../photogllary/Portfolio/DSC_6223.jpg",
    "../photogllary/Portfolio/DSC_6528.jpg",
    "../photogllary/Portfolio/DSC_6554.jpg",
    "../photogllary/Portfolio/DSC_6622 (2).jpg",
    "../photogllary/Portfolio/DSC_7345.jpg",
    "../photogllary/Portfolio/DSC_7488.jpg",
    "../photogllary/Portfolio/DSC_7510 (1).jpg",
    "../photogllary/Portfolio/DSC_7520.jpg",
    "../photogllary/Portfolio/DSC_7523.jpg",
    "../photogllary/Portfolio/DSC_8388.jpg",
    "../photogllary/Portfolio/F16 Belge-2.jpg",
    "../photogllary/Portfolio/F16 Belge-5.jpg",
    "../photogllary/Portfolio/Ferrari.jpg",
    "../photogllary/Portfolio/ferrari_challenge(1).jpg",
    "../photogllary/Portfolio/ferrari_challenge(3).jpg",
    "../photogllary/Portfolio/ferrari_challenge.jpg",
    "../photogllary/Portfolio/FordGT (1).jpg",
    "../photogllary/Portfolio/FordGT (2).jpg",
    "../photogllary/Portfolio/Formule (1).jpg",
    "../photogllary/Portfolio/Formule (2).jpg",
    "../photogllary/Portfolio/Formule (3).jpg",
    "../photogllary/Portfolio/GP_Explorer (1).jpg",
    "../photogllary/Portfolio/GP_Explorer (2).jpg",
    "../photogllary/Portfolio/GP_Explorer (3).jpg",
    "../photogllary/Portfolio/GP_explorer4.jpg",
    "../photogllary/Portfolio/GR10_Accident.jpg",
    "../photogllary/Portfolio/huracan.jpg",
    "../photogllary/Portfolio/LMP2 (1).jpg",
    "../photogllary/Portfolio/LMP2 (2).jpg",
    "../photogllary/Portfolio/Matra (1).jpg",
    "../photogllary/Portfolio/Matra (2).jpg",
    "../photogllary/Portfolio/Peugeot_team.jpg",
    "../photogllary/Portfolio/Porsche_962.jpg",
    "../photogllary/Portfolio/Rally.jpg",
    "../photogllary/Portfolio/Rally2.jpg",
    "../photogllary/Portfolio/Reventon.jpg",
    "../photogllary/Portfolio/Rexy.jpg",
    "../photogllary/Portfolio/RSR.jpg",
    "../photogllary/Portfolio/RWB (1).jpg",
    "../photogllary/Portfolio/RWB (2).jpg",
    "../photogllary/Portfolio/SVJ.jpg",
    "../photogllary/Portfolio/9x8.jpg",
    "../photogllary/Portfolio/9x8_nuit.jpg",
    "../photogllary/Portfolio/288_nuit.jpg",
    "../photogllary/Portfolio/488.jpg",
    "../photogllary/Portfolio/488_nuit_2.jpg",
    "../photogllary/Portfolio/787B.jpg",
    "../photogllary/Portfolio/Alpine (2).jpg",
    "../photogllary/Portfolio/Alpine.jpg"
];

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