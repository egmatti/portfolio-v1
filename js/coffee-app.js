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
  var laptopHeight = $("#coffee-app-page .project-desktop-mockups-section__row--first").height();
  var laptopPosition = -(laptopHeight / 2);
  var rowMargin = (laptopHeight / 2);

  var rowMarginMobile = -(laptopHeight / 2);

  var backgroundWhiteHeight = $("#coffee-app-page .project-desktop-mockups-section__background--white").outerHeight();
  var backgroundGrayHeight = $("#coffee-app-page .project-desktop-mockups-section__background--gray").outerHeight();
  var desktopMockupsSectionHeight = backgroundWhiteHeight + backgroundGrayHeight + rowMargin;

  var borderHeight = backgroundWhiteHeight + backgroundGrayHeight;
  var borderHeightMobile = backgroundWhiteHeight + backgroundGrayHeight - (laptopHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#coffee-app-page .project-desktop-mockups-section__border").css({"height": borderHeightMobile});

    $("#coffee-app-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#coffee-app-page .project-desktop-mockups-section__row--first").css({"margin-bottom": rowMarginMobile});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#coffee-app-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#coffee-app-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#coffee-app-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#coffee-app-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  } else {
    // window width is at least 1025px
    $("#coffee-app-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#coffee-app-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#coffee-app-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#coffee-app-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  }
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
