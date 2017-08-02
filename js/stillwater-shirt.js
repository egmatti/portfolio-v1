// ==========================================
// STILLWATER SHIRT PAGE
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

sr.reveal('.pocket-design-section img', {delay: 250});

sr.reveal('.screenprinting-section img', {delay: 250});


// SHIRT DESIGN SECTION HEIGHT

$(document).ready(function(){
  var shirtDesignSectionHeight = $("#stillwater-shirt-page .shirt-design-section").outerHeight();
  var shirtDesignSectionHeadlineHeight = $("#stillwater-shirt-page .shirt-design-section h2").outerHeight();
  var shirtDesignImageContainerHeight = shirtDesignSectionHeight - shirtDesignImageContainerHeight;

  $("#stillwater-shirt-page .shirt-design-image-container").css({"height": shirtDesignImageContainerHeight});
});


// SCREENPRINTING SECTION HEIGHT

$(document).ready(function(){
  var screenprintingImageContainerHeight = $("#stillwater-shirt-page .screenprinting-image-container").outerHeight() + 150;
  var screenprintingDescriptionHeight = $("#stillwater-shirt-page .screenprinting-description").outerHeight() + 150;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#stillwater-shirt-page .screenprinting-section").css({"height": screenprintingDescriptionHeight});
  } else {
    // window width is at least 767px
    $("#stillwater-shirt-page .screenprinting-section").css({"height": screenprintingImageContainerHeight});
  }
});
