// ==========================================
// BOOKSHELF PAGE
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
