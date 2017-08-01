// ==========================================
// BALLAD PAGE
// ==========================================

// OVERVIEW SECTION FADE IN ON SCROLL

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );

// Get the position from the top of the page
var startY = 80;

// Set overview div's displays to "none"
var $overviewContainer = $(".overview-container");
var $overviewButton = $(".button-container");

$(window).on("scroll", function(){
  checkY();
});

function checkY(){
  if( $(window).scrollTop() > startY ){
    $(window).off("scroll");
    if (mediaQuerySmall.matches) {
      // window width is less than 767px
      $overviewContainer.velocity({translateY: "0px"});
      $overviewButton.velocity({translateY: "0px"});
    } else if (mediaQueryMedium.matches) {
      // window width is less than 1025px
      $overviewContainer.velocity({translateY: "0px"});
      $overviewButton.velocity({translateY: "0px"});
    } else {
      // window width is at least 767px
      $overviewContainer.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
      $overviewButton.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", delay: 475, duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
    }
  }
};

// Do this on load just in case the user starts half way down the page
checkY();


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
