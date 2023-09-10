let librasFixedImage = document.querySelector("#libras-fixed-image");
let librasPopup = document.querySelector("#libras-popup");

librasFixedImage.addEventListener("mouseover", function () {
  if (librasPopup.style.display === "block") {
    librasPopup.style.display = "none";
  } else {
    librasPopup.style.display = "block";
  }
});

librasFixedImage.addEventListener("mouseout", function () {
  if (librasPopup.style.display === "block") {
    librasPopup.style.display = "none";
  } else {
    librasPopup.style.display = "block";
  }
});

let barraLogoLibras = document.querySelector("#barra-logo-libras");
let barraLibrasPopup = document.querySelector("#barra-libras-popup");

barraLogoLibras.addEventListener("mouseover", function () {
  if (barraLibrasPopup.style.display === "block") {
    barraLibrasPopup.style.display = "none";
  } else {
    barraLibrasPopup.style.display = "block";
  }
});

barraLogoLibras.addEventListener("mouseout", function () {
  if (barraLibrasPopup.style.display === "block") {
    barraLibrasPopup.style.display = "none";
  } else {
    barraLibrasPopup.style.display = "block";
  }
});
