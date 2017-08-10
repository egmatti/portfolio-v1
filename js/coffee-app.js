// ==========================================
// COFFEE APP PAGE
// ==========================================

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
