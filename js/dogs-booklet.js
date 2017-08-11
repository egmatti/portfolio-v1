// ==========================================
// DOGS BOOKLET PAGE
// ==========================================

// Get the position from the top of the page
var startY = 80;

// Set overview div's displays to "none"
var $overviewDescription = $(".project-overview-section__description");
var $overviewButton = $(".project-overview-section .button-container");

$(window).on("scroll", function(){
  checkY();
});

function checkY(){
  if( $(window).scrollTop() > startY ){
    $(window).off("scroll");
    if (mediaQuerySmall.matches) {
      // window width is less than 767px
      $overviewDescription.velocity({translateY: "0px"});
      $overviewButton.velocity({translateY: "0px"});
    } else if (mediaQueryMedium.matches) {
      // window width is less than 1025px
      $overviewDescription.velocity({translateY: "0px"});
      $overviewButton.velocity({translateY: "0px"});
    } else {
      // window width is at least 767px
      $overviewDescription.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
      $overviewButton.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", delay: 475, duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
    }
  }
};

// Do this on load just in case the user starts half way down the page
checkY();


// PROJECT MAIN IMAGE MARGIN

$(document).ready(function(){
  var projectMainImageHeight = $("#dogs-booklet-page .project-main-image-section__image-container").height();
  var projectMainImagePosition = $("#dogs-booklet-page .project-main-image-section__image-container").position().top;
  var projectMainImageBackgroundMargin = (projectMainImageHeight * (3/4)) - ((projectMainImageHeight - projectMainImagePosition) * 4);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#dogs-booklet-page .project-main-image-section__background").css({"margin-bottom": projectMainImageBackgroundMargin});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px

  } else {
    // window width is at least 1025px

  }
});
