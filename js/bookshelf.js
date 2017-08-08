// ==========================================
// BOOKSHELF PAGE
// ==========================================

// BUTTON COLOR CHANGE

$("#bookshelf-page .button").click(function() {
  $(this).css({"background": "#c54f44", "border": "2px solid #c54f44"});
  $(this).find("span").css("color", "#fff");
});


// PROJECT MAIN IMAGE MARGIN

$(document).ready(function(){
  var projectMainImageHeight = $("#bookshelf-page .project-main-image-section__image-container").height();
  var projectMainImageBackgroundMargin = (projectMainImageHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#bookshelf-page .project-main-image-section__background").css({"margin-bottom": projectMainImageBackgroundMargin});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px

  } else {
    // window width is at least 1025px

  }
});


// PROJECT DESKTOP MOCKUPS SECTION MARGIN AND LAPTOP POSITIONING

$(document).ready(function(){
  var laptopHeight = $("#bookshelf-page .project-desktop-mockups-section__row--first").height();
  var laptopPosition = -(laptopHeight / 2);
  var rowMargin = (laptopHeight / 2);

  var rowMarginMobile = -(laptopHeight / 2);

  var backgroundWhiteHeight = $("#bookshelf-page .project-desktop-mockups-section__background--white").outerHeight();
  var backgroundGrayHeight = $("#bookshelf-page .project-desktop-mockups-section__background--gray").outerHeight();
  var desktopMockupsSectionHeight = backgroundWhiteHeight + backgroundGrayHeight + rowMargin;

  var borderHeight = backgroundWhiteHeight + backgroundGrayHeight;
  var borderHeightMobile = backgroundWhiteHeight + backgroundGrayHeight - (laptopHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#bookshelf-page .project-desktop-mockups-section__border").css({"height": borderHeightMobile});

    $("#bookshelf-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#bookshelf-page .project-desktop-mockups-section__row--first").css({"margin-bottom": rowMarginMobile});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#bookshelf-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#bookshelf-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#bookshelf-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#bookshelf-page .project-desktop-mockups-section__row--last").css({"margin-top": rowMargin});
  } else {
    // window width is at least 1025px
    $("#bookshelf-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#bookshelf-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#bookshelf-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#bookshelf-page .project-desktop-mockups-section__row--last").css({"margin-top": rowMargin});
  }
});
