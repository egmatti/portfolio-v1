// ==========================================
// CHRONICLE PAGE
// ==========================================

// OVERVIEW SECTION FADE IN ON SCROLL

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );

// Get the position from the top of the page
var startY = 80;

// Set overview div's displays to "none"
var $overviewLeft = $(".overview-left");
var $overviewRight = $(".overview-right");

$(window).on("scroll", function(){
  checkY();
});

function checkY(){
  if( $(window).scrollTop() > startY ){
    $(window).off("scroll");
    if (mediaQuerySmall.matches) {
      // window width is less than 767px
      $overviewLeft.velocity({translateY: "0px"});
      $overviewRight.velocity({translateY: "0px"});
    } else if (mediaQueryMedium.matches) {
      // window width is less than 1025px
      $overviewLeft.velocity({translateY: "0px"});
      $overviewRight.velocity({translateY: "0px"});
    } else {
      // window width is at least 767px
      $overviewLeft.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
      $overviewRight.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", delay: 225, duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
    }
  }
};

// Do this on load just in case the user starts half way down the page
checkY();


// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.logo-section img', {delay: 250});

sr.reveal('.colophon-section img', {delay: 250});

sr.reveal('.collateral-section img', {delay: 250});


// LOGO SECTION HEIGHT

$(document).ready(function(){
  var leftColumnHeight = $("#chronicle-page .left-column").outerHeight();
  $("#chronicle-page .logo-section").css({"height": leftColumnHeight});
});


// COLLATERAL SECTION HEIGHT

$(document).ready(function(){
  var collateralImageContainerHeight = $("#chronicle-page .collateral-image-container").outerHeight() + 150;
  var collateralDescriptionHeight = $("#chronicle-page .collateral-description").outerHeight() + 150;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#chronicle-page .collateral-section").css({"height": collateralDescriptionHeight});
  } else {
    // window width is at least 767px
    $("#chronicle-page .collateral-section").css({"height": collateralDescriptionHeight});
  }
});
