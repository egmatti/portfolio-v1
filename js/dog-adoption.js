// ==========================================
// DOG ADOPTION PAGE
// ==========================================

// BUTTON COLOR CHANGE

$("#dog-adoption-page .button").click(function() {
  $(this).css({"background": "#c54f44", "border": "2px solid #c54f44"});
  $(this).find("span").css("color", "#fff");
});


// PROJECT MAIN IMAGE MARGIN

$(document).ready(function(){
  var projectMainImageHeight = $("#dog-adoption-page .project-main-image-section__image-container").height();
  var projectMainImageBackgroundMargin = (projectMainImageHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#dog-adoption-page .project-main-image-section__background").css({"margin-bottom": projectMainImageBackgroundMargin});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px

  } else {
    // window width is at least 1025px

  }
});


// PROJECT DESKTOP MOCKUPS SECTION MARGIN AND LAPTOP POSITIONING

$(document).ready(function(){
  var laptopHeight = $("#dog-adoption-page .project-desktop-mockups-section__row--first").height();
  var laptopPosition = -(laptopHeight / 2);
  var rowMargin = (laptopHeight / 2);

  var rowMarginMobile = -(laptopHeight / 2);

  var backgroundWhiteHeight = $("#dog-adoption-page .project-desktop-mockups-section__background--white").outerHeight();
  var backgroundGrayHeight = $("#dog-adoption-page .project-desktop-mockups-section__background--gray").outerHeight();
  var desktopMockupsSectionHeight = backgroundWhiteHeight + backgroundGrayHeight + rowMargin;

  var borderHeight = backgroundWhiteHeight + backgroundGrayHeight;
  var borderHeightMobile = backgroundWhiteHeight + backgroundGrayHeight - (laptopHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#dog-adoption-page .project-desktop-mockups-section__border").css({"height": borderHeightMobile});

    $("#dog-adoption-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#dog-adoption-page .project-desktop-mockups-section__row--first").css({"margin-bottom": rowMarginMobile});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#dog-adoption-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#dog-adoption-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#dog-adoption-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#dog-adoption-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  } else {
    // window width is at least 1025px
    $("#dog-adoption-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#dog-adoption-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#dog-adoption-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#dog-adoption-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  }
});
