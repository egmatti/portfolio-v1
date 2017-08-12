// ==========================================
// COFFEE APP PAGE
// ==========================================

// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.project-overview-section__line--hero', {distance: "-25px", duration: 1000});
sr.reveal('.project-overview-section__line--overview', {delay: 50, distance: "-25px", duration: 1000});
sr.reveal('.project-mobile-mockups-section__image', {delay: 250}, 175);
sr.reveal('.project-wireframes-section__row img', {delay: 250}, 175);
sr.reveal('.project-wireframes-section__row--last img', {delay: 250}, 175);
sr.reveal('.project-double-slider-for__slide img', {delay: 250});
sr.reveal('.project-double-slider-nav img', {delay: 250}, 175);


// PROJECT OVERVIEW FADE IN ON SCROLL

// Get the position from the top of the page
var startY = 80;

// Set overview div's displays to "none"
var $overviewDescription = $(".project-overview-section__description");
var $overviewImage = $(".project-overview-section img");

$(window).on("scroll", function(){
  checkY();
});

function checkY(){
  if( $(window).scrollTop() > startY ){
    $(window).off("scroll");
    if (mediaQuerySmall.matches) {
      // window width is less than 767px
      $overviewDescription.velocity({translateY: "0px"});
      $overviewImage.velocity({translateY: "0px"});
    } else if (mediaQueryMedium.matches) {
      // window width is less than 1025px
      $overviewDescription.velocity({translateY: "0px"});
      $overviewImage.velocity({translateY: "0px"});
    } else {
      // window width is at least 767px
      $overviewDescription.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
      $overviewImage.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", delay: 475, duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
    }
  }
};

// Do this on load just in case the user starts half way down the page
checkY();


// PROJECT MAIN IMAGE MARGIN

$(document).ready(function(){
  var projectMainImageHeight = $("#coffee-app-page .project-main-image-section__image-container").height();
  var projectMainImageBackgroundMargin = (projectMainImageHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#coffee-app-page .project-main-image-section__background").css({"margin-bottom": projectMainImageBackgroundMargin});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px

  } else {
    // window width is at least 1025px

  }
});


// PROJECT DESKTOP MOCKUPS SECTION MARGIN AND LAPTOP POSITIONING

$(document).ready(function(){
  var backgroundWhiteHeight = $("#coffee-app-page .project-wireframes-section__background--white").outerHeight();
  var backgroundGrayHeight = $("#coffee-app-page .project-wireframes-section__background--gray").outerHeight();
  var wireframesSectionHeight = backgroundWhiteHeight + backgroundGrayHeight;

  var borderHeight = backgroundWhiteHeight + backgroundGrayHeight - 10;
  var borderHeightMobile = backgroundWhiteHeight + backgroundGrayHeight + 10;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#coffee-app-page .project-wireframes-section__border").css({"height": borderHeightMobile});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#coffee-app-page .project-wireframes-section__border").css({"height": borderHeight});
    $("#coffee-app-page .project-wireframes-section").css({"margin-bottom": wireframesSectionHeight});
  } else {
    // window width is at least 1025px
    $("#coffee-app-page .project-wireframes-section__border").css({"height": borderHeight});
    $("#coffee-app-page .project-wireframes-section").css({"margin-bottom": wireframesSectionHeight});
  }
});


// PROJECT DOUBLE SLIDER

$(".project-double-slider-for").slick({
 arrows: false,
 asNavFor: ".project-double-slider-nav",
 fade: true,
 slidesToScroll: 1,
 slidesToShow: 1
});

$(".project-double-slider-nav").slick({
  arrows: true,
  asNavFor: ".project-double-slider-for",
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3
});
