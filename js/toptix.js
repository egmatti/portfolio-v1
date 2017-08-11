// ==========================================
// TOPTIX PAGE
// ==========================================

// PROJECT MAIN IMAGE MARGIN

$(document).ready(function(){
  var projectMainImageHeight = $("#toptix-page .project-main-image-section__image-container").height();
  var projectMainImagePosition = $("#toptix-page .project-main-image-section__image-container").position().top;
  var projectMainImageBackgroundMargin = (projectMainImageHeight * (3/4)) - ((projectMainImageHeight - projectMainImagePosition) * 4);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#toptix-page .project-main-image-section__background").css({"margin-bottom": projectMainImageBackgroundMargin});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px

  } else {
    // window width is at least 1025px

  }
});


// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.project-float-section img', {delay: 250});
