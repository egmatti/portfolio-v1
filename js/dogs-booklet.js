// ==========================================
// DOGS BOOKLET PAGE
// ==========================================

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


// PROJECT DESKTOP MOCKUPS SECTION MARGIN AND LAPTOP POSITIONING

$(document).ready(function(){
  var laptopHeight = $("#dogs-booklet-page .project-desktop-mockups-section__row--first").height();
  var laptopPosition = -(laptopHeight / 2);
  var rowMargin = (laptopHeight / 2);

  var rowMarginMobile = -(laptopHeight / 2);

  var backgroundWhiteHeight = $("#dogs-booklet-page .project-desktop-mockups-section__background--white").outerHeight();
  var backgroundGrayHeight = $("#dogs-booklet-page .project-desktop-mockups-section__background--gray").outerHeight();
  var desktopMockupsSectionHeight = backgroundWhiteHeight + backgroundGrayHeight + rowMargin;

  var borderHeight = backgroundWhiteHeight + backgroundGrayHeight;
  var borderHeightMobile = backgroundWhiteHeight + backgroundGrayHeight - (laptopHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#dogs-booklet-page .project-desktop-mockups-section__border").css({"height": borderHeightMobile});

    $("#dogs-booklet-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#dogs-booklet-page .project-desktop-mockups-section__row--first").css({"margin-bottom": rowMarginMobile});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#dogs-booklet-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#dogs-booklet-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#dogs-booklet-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#dogs-booklet-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  } else {
    // window width is at least 1025px
    $("#dogs-booklet-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#dogs-booklet-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#dogs-booklet-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#dogs-booklet-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  }
});


// PROJECT SLIDER

$(".project-slider-section-for--desktop").slick({
 arrows: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 3,
 vertical: false
});

$(".project-slider-section-for--tablet").slick({
 arrows: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 2,
 vertical: false
});

$(".project-slider-section-for--mobile").slick({
 arrows: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 1,
 vertical: false
});
