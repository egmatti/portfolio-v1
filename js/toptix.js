// ==========================================
// TOPTIX PAGE
// ==========================================

// OVERVIEW SECTION FADE IN ON SCROLL

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );

// Get the position from the top of the page
var startY = 80;

// Set overview div's displays to "none"
var $overviewLeft = $(".overview-left");
var $overviewRight = $(".overview-right");

$(window).on("scroll", function(){
  checkY();
});

function checkY(){
  if( $(window).scrollTop() > startY ){
    $(window).off("scroll");
    if (mediaQuerySmall.matches) {
      // window width is less than 767px
      $overviewLeft.velocity({translateY: "0px"});
      $overviewRight.velocity({translateY: "0px"});
    } else if (mediaQueryMedium.matches) {
      // window width is less than 1025px
      $overviewLeft.velocity({translateY: "0px"});
      $overviewRight.velocity({translateY: "0px"});
    } else {
      // window width is at least 767px
      $overviewLeft.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
      $overviewRight.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", delay: 225, duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
    }
  }
};

// Do this on load just in case the user starts half way down the page
checkY();


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
