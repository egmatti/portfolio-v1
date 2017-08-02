// ==========================================
// JAMAICA STICKERS PAGE
// ==========================================

// OVERVIEW SECTION FADE IN ON SCROLL

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );

// Get the position from the top of the page
var startY = 80;

// Set overview div's displays to "none"
var $overviewContainer = $(".overview-container");

$(window).on("scroll", function(){
  checkY();
});

function checkY(){
  if( $(window).scrollTop() > startY ){
    $(window).off("scroll");
    if (mediaQuerySmall.matches) {
      // window width is less than 767px
      $overviewContainer.velocity({translateY: "0px"});
    } else if (mediaQueryMedium.matches) {
      // window width is less than 1025px
      $overviewContainer.velocity({translateY: "0px"});
    } else {
      // window width is at least 767px
      $overviewContainer.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
    }
  }
};

// Do this on load just in case the user starts half way down the page
checkY();


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
