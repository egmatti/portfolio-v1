// ==========================================
// JAMAICA STICKERS PAGE
// ==========================================

// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});

sr.reveal('.designs-section .synced-slider-for img', {delay: 250});
sr.reveal('.designs-section .synced-slider-nav img', {delay: 475}, 175);


// DESIGNS SLIDER

$(".synced-slider-for").slick({
 arrows: false,
 asNavFor: ".synced-slider-nav",
 fade: true,
 slidesToScroll: 1,
 slidesToShow: 1
});

$(".synced-slider-nav").slick({
  arrows: true,
  asNavFor: ".synced-slider-for",
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1
});


// DESIGN IMAGE CONTAINER HEIGHT

$(document).ready(function(){
  var designsSectionDescriptionHeight = $("#jamaica-stickers-page .synced-slider-description").outerHeight();

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#jamaica-stickers-page .design-image-container").css({"height": designsSectionDescriptionHeight});
  } else {
    // window width is at least 1025px
    $("#jamaica-stickers-page .design-image-container").css({"height": designsSectionDescriptionHeight});
  }
});
