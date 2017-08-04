// ==========================================
// TOPTIX PAGE
// ==========================================

// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});

// sr.reveal('.advertisements-slider-for__post img', {delay: 250}, 175);

sr.reveal('.mailings-section img', {delay: 250});


// ADVERTISEMENTS SLIDER

$(".advertisements-slider-for").slick({
 adaptiveHeight: true,
 arrows: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 1,
 vertical: false
});


// ADVERTISEMENTS SECTION HEIGHT

$(document).ready(function(){
  if (mediaQuerySmall.matches) {
    // window width is less than 767px
    var advertisementHeight = $("#toptix-page .advertisements-section .slick-current").outerHeight();
    var advertisementsSectionHeadlineHeight = $("#toptix-page .advertisements-section h2").outerHeight();
    var advertisementsSectionHeight = advertisementHeight + advertisementsSectionHeadlineHeight + 100;

    $("#toptix-page .advertisements-section").css({"height": advertisementsSectionHeight});

    $('#toptix-page .advertisements-section .slick-next').on( "click", function() {

      var advertisementHeight = $("#toptix-page .advertisements-section .slick-current").outerHeight();
      var advertisementsSectionHeadlineHeight = $("#toptix-page .advertisements-section h2").outerHeight();
      var advertisementsSectionHeight = advertisementHeight + advertisementsSectionHeadlineHeight + 50;
      $("#toptix-page .advertisements-section").css({"height": advertisementsSectionHeight});
    });

    $('#toptix-page .advertisements-section .slick-prev').on( "click", function() {

      var advertisementHeight = $("#toptix-page .advertisements-section .slick-current").outerHeight();
      var advertisementsSectionHeadlineHeight = $("#toptix-page .advertisements-section h2").outerHeight();
      var advertisementsSectionHeight = advertisementHeight + advertisementsSectionHeadlineHeight + 50;
      $("#toptix-page .advertisements-section").css({"height": advertisementsSectionHeight});
    });

  } else {
    // window width is at least 767px

  }
});


// MAILINGS SECTION HEIGHT

$(document).ready(function(){
  var mailingsImageContainerHeight = $("#toptix-page .mailings-image-container").outerHeight() + 150;
  var mailingsDescriptionTabletHeight = $("#toptix-page .mailings-description").outerHeight() + 100;
  var mailingsDescriptionDesktopHeight = $("#toptix-page .mailings-description").outerHeight() + 150;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#toptix-page .mailings-section").css({"height": mailingsDescriptionDesktopHeight});
  } else {
    // window width is at least 1025px
    $("#toptix-page .mailings-section").css({"height": mailingsDescriptionDesktopHeight});
  }
});
