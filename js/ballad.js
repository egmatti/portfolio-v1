// ==========================================
// BALLAD PAGE
// ==========================================

// BUTTON COLOR CHANGE

$("#ballad-page .button").click(function() {
  $(this).css({"background": "#0e5580", "border": "2px solid #0e5580"});
  $(this).find("span").css("color", "#fff");
});


// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.style-guides-section .moodboards', {delay: 250});
sr.reveal('.style-guides-section .synced-slider-nav img', {delay: 475}, 175);

sr.reveal('.logo-section img', {delay: 250});

sr.reveal('.mobile-prototype-section img', {delay: 250});


// STYLE GUIDES SLIDER

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


// MOBILE PROTOTYPE SECTION HEIGHT

$(document).ready(function(){
  var mobilePrototypeImageContainerHeight = $("#ballad-page .mobile-prototype-image-container").outerHeight() + 150;
  var mobilePrototypeDescriptionHeight = $("#ballad-page .mobile-prototype-description").outerHeight() + 150;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#ballad-page .mobile-prototype-section").css({"height": mobilePrototypeDescriptionHeight});
  } else {
    // window width is at least 767px
    $("#ballad-page .mobile-prototype-section").css({"height": mobilePrototypeImageContainerHeight});
  }
});


// RESPONSIVE SITE SECTION HEIGHT

$(document).ready(function(){
  var responsiveSiteImageHeight = $("#ballad-page .responsive-site-section img").outerHeight() + 150;
  $("#ballad-page .responsive-site-section").css({"height": responsiveSiteImageHeight});
});
