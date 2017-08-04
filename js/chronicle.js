// ==========================================
// CHRONICLE PAGE
// ==========================================

// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.logo-section img', {delay: 250});

sr.reveal('.colophon-section img', {delay: 250});

sr.reveal('.collateral-section img', {delay: 250});


// COLOPHON IMAGE CONTAINER HEIGHT

$(document).ready(function(){
  var colophonSectionDescriptionHeight = $("#chronicle-page .colophon-description").outerHeight();

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#chronicle-page .colophon-image-container").css({"height": colophonSectionDescriptionHeight});
  } else {
    // window width is at least 767px
    $("#chronicle-page .colophon-image-container").css({"height": colophonSectionDescriptionHeight});
  }
});


// COLLATERAL SECTION HEIGHT

$(document).ready(function(){
  var collateralImageContainerHeight = $("#chronicle-page .collateral-image-container").outerHeight() + 150;
  var collateralDescriptionTabletHeight = $("#chronicle-page .collateral-description").outerHeight() + 100;
  var collateralDescriptionDesktopHeight = $("#chronicle-page .collateral-description").outerHeight() + 150;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#chronicle-page .collateral-section").css({"height": collateralDescriptionDesktopHeight});
  } else {
    // window width is at least 1025px
    $("#chronicle-page .collateral-section").css({"height": collateralDescriptionDesktopHeight});
  }
});
