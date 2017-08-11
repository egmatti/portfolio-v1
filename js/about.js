// ==========================================
// ABOUT PAGE
// ==========================================

// PROJECT MAIN IMAGE MARGIN

$(document).ready(function(){
  var projectMainImageHeight = $("#about-page .project-main-image-section__image-container").height();
  var projectMainImageBackgroundMargin = (projectMainImageHeight / 2.5);

  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    $("#about-page .project-main-image-section__background").css({"margin-bottom": projectMainImageBackgroundMargin});
  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px

  } else {
    // window width is at least 1025px

  }
});


// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.main-body-section .button-resume', {delay: 250});
sr.reveal('.contact-section .left-column', {delay: 250});
sr.reveal('.contact-section .right-column', {delay: 250});
