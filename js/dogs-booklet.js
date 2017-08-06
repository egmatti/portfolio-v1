// ==========================================
// DOGS BOOKLET PAGE
// ==========================================

// DESKTOP MOCKUPS SECTION MARGIN AND LAPTOP POSITIONING

$(document).ready(function(){
  var laptopHeight = $("#dogs-booklet-page .project-desktop-mockups-section__row--first").height();
  var laptopPosition = -(laptopHeight / 2);
  var rowMargin = (laptopHeight / 2);

  var backgroundWhiteHeight = $("#dogs-booklet-page .project-desktop-mockups-section__background--white").outerHeight();
  var backgroundGrayHeight = $("#dogs-booklet-page .project-desktop-mockups-section__background--gray").outerHeight();
  var desktopMockupsSectionHeight = backgroundWhiteHeight + backgroundGrayHeight + rowMargin;

  var borderHeight = backgroundWhiteHeight + backgroundGrayHeight;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px

  } else {
    // window width is at least 1025px
    $("#dogs-booklet-page .project-desktop-mockups-section__border").css({"height": borderHeight});
    $("#dogs-booklet-page .project-desktop-mockups-section").css({"margin-bottom": desktopMockupsSectionHeight});

    $("#dogs-booklet-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#dogs-booklet-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  }
});


// INSTAGRAM SLIDER

$(".project-slider-section-for").slick({
 arrows: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 3,
 vertical: false
});
