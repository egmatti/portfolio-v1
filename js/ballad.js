// ==========================================
// BALLAD PAGE
// ==========================================

// PROJECT OVERVIEW FADE IN ON SCROLL

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


// BUTTON COLOR CHANGE

$("#ballad-page .button").click(function() {
  $(this).css({"background": "#0e5580", "border": "2px solid #0e5580"});
  $(this).find("span").css("color", "#fff");
});


// PROJECT MAIN IMAGE MARGIN

$(document).ready(function(){
  var projectMainImageHeight = $("#ballad-page .project-main-image-section__image-container").height();
  var projectMainImageBackgroundMargin = (projectMainImageHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#ballad-page .project-main-image-section__background").css({"margin-bottom": projectMainImageBackgroundMargin});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px

  } else {
    // window width is at least 1025px

  }
});


// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.project-mobile-mockups-section__image', {delay: 250}, 175);
sr.reveal('.project-float-section img', {delay: 250});
sr.reveal('.project-desktop-mockups-section__image--laptop', {delay: 250});
sr.reveal('.project-desktop-mockups-section__row--second img', {delay: 250}, 175);
sr.reveal('.project-desktop-mockups-section__row--last img', {delay: 250}, 175);


// PROJECT DESKTOP MOCKUPS SECTION MARGIN AND LAPTOP POSITIONING

$(document).ready(function(){
  var laptopHeight = $("#ballad-page .project-desktop-mockups-section__row--first").height();
  var laptopPosition = -(laptopHeight / 2);
  var rowMargin = (laptopHeight / 2);

  var rowMarginMobile = -(laptopHeight / 2);

  var backgroundWhiteHeight = $("#ballad-page .project-desktop-mockups-section__background--white").outerHeight();
  var backgroundGrayHeight = $("#ballad-page .project-desktop-mockups-section__background--gray").outerHeight();
  var desktopMockupsSectionHeight = backgroundWhiteHeight + backgroundGrayHeight + rowMargin;

  var borderHeight = backgroundWhiteHeight + backgroundGrayHeight;
  var borderHeightMobile = backgroundWhiteHeight + backgroundGrayHeight - (laptopHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#ballad-page .project-desktop-mockups-section__border").css({"height": borderHeightMobile});

    $("#ballad-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#ballad-page .project-desktop-mockups-section__row--first").css({"margin-bottom": rowMarginMobile});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#ballad-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#ballad-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#ballad-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#ballad-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  } else {
    // window width is at least 1025px
    $("#ballad-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#ballad-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#ballad-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#ballad-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  }
});
