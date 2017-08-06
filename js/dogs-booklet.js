// ==========================================
// DOGS BOOKLET PAGE
// ==========================================

// DESKTOP MOCKUPS SECTION LAPTOP POSITIONING

$(document).ready(function(){
  var laptopHeight = $("#dogs-booklet-page .project-desktop-mockups-section__row--first").height();
  var laptopPosition = -(laptopHeight / 2);
  var rowMargin = (laptopHeight / 2);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px

  } else {
    // window width is at least 1025px
    $("#dogs-booklet-page .project-desktop-mockups-section__row--first").css({"top": laptopPosition});
    $("#dogs-booklet-page .project-desktop-mockups-section__row--second").css({"margin-top": rowMargin});
  }
});
