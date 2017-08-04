// ==========================================
// COFFEE APP PAGE
// ==========================================

// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.wireframes-section img', {delay: 250});

sr.reveal('.mockups-section .synced-slider-for img', {delay: 250});
sr.reveal('.mockups-section .synced-slider-nav img', {delay: 475}, 175);

sr.reveal('.prototype-section img', {delay: 250});


// WIREFRAME SECTION HEIGHT

$(document).ready(function(){
  var leftColumnHeight = $("#coffee-app-page .left-column").outerHeight();
  $("#coffee-app-page .wireframes-section").css({"height": leftColumnHeight});
});


// MOCKUPS SLIDER

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
  slidesToShow: 3
});


// PROTOTYPE SECTION HEIGHT

$(document).ready(function(){
  var prototypeImageContainerHeight = $("#coffee-app-page .prototype-image-container").outerHeight() + 150;
  var prototypeDescriptionHeight = $("#coffee-app-page .prototype-description").outerHeight() + 150;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#coffee-app-page .prototype-section").css({"height": prototypeDescriptionHeight});
  } else {
    // window width is at least 767px
    $("#coffee-app-page .prototype-section").css({"height": prototypeImageContainerHeight});
  }
});
