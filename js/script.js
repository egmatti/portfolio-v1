// GETTING STARTED EXAMPLE
// $(document).ready(function(){
//   // jQuery code
// });


// FIXDED HEADER ON SCROLL

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
     //downscroll code
       $("header").slideUp();
      //  $("#home-page header").css("position", "static");
   } else {
      // upscroll code
      $("header").slideDown();
      // $("#home-page header").css("position", "fixed");
   }
   lastScrollTop = st;
}, false);


// MAIN NAV MOBILE DROPDOWN

$(".main-nav-mobile-icon").on( "click", function() {
  $(".main-nav-mobile-dropdown").slideToggle();
  $(".box-shadow-cover").slideToggle();
});


// BUTTON COLOR CHANGE

$(".button").click(function() {
  $(this).css({"background": "#1fd4f9", "border": "2px solid #1fd4f9"});
  $(this).find("span").css("color", "#fff");
});


// INSTAGRAM FOLLOW BUTTON

$(".button-instagram").click(function() {
  $(this).find("span").html("Thanks!");
});


// CONTACT SEND BUTTON

$(".button-send").click(function() {
  $(this).find("span").html("Sent!");
});


// RÉSUMÉ VIEW BUTTON

$(".button-resume").click(function() {
  $(this).find("span").html("Thanks!");
});


// SITE VIEW BUTTON

$(".button-site").click(function() {
  $(this).find("span").html("Thanks!");
});


// DIRECTORY ROW FIGURE HEIGHT

$(document).ready(function(){
  var secondRowFigureWidth = $(".directory__figure--second-row .directory__image-container").outerWidth();
  var secondRowFigureHeight = secondRowFigureWidth / 2;

  $(".directory__figure--second-row .directory__image-container").css({"height": secondRowFigureHeight});
});

$(document).ready(function(){
  var otherRowFigureWidth = $(".directory__figure--other-row .directory__image-container").outerWidth();
  var otherRowFigureHeight = otherRowFigureWidth / 2;

  $(".directory__figure--other-row .directory__image-container").css({"height": otherRowFigureHeight});
});


// OVERVIEW SECTION FADE IN ON SCROLL

const mediaQuerySmall = window.matchMedia( "(max-width: 767px)" );
const mediaQueryMedium = window.matchMedia( "(max-width: 1025px)" );

// Get the position from the top of the page
var startY = 80;

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
      // window width is at least 1025px
      $overviewLeft.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
      $overviewRight.velocity({opacity: 1, translateY: "-30px"}, {visibility: "visible", delay: 475, duration: 500, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)"});
    }
  }
};

// Do this on load just in case the user starts half way down the page
checkY();
