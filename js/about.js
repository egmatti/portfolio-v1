// OVERVIEW SECTION FADE IN ON SCROLL

// Get the position from the top of the page
var startY = 80;

// Set overview div's displays to "none"
var $overviewLeft = $("#about-page .overview-left");
var $overviewRight = $("#about-page .overview-right");
$overviewLeft.css("display", "none");
$overviewRight.css("display", "none");

$(window).on("scroll", function(){
    checkY();
});

function checkY(){
    if( $(window).scrollTop() > startY ){
      $(window).off("scroll");
      $overviewLeft.velocity("fadeIn", {duration: 500});
      $overviewRight.velocity("fadeIn", {display: "flex", delay: 475, duration: 475});
    }
};

// Do this on load just in case the user starts half way down the page
checkY();


// CONTACT SECTION FADE IN ON SCROLL

var contactSectionTop = $("#about-page .contact-section").offset().top;
var windowBottom = $(window).scrollTop() + $(window).height();
console.log(windowBottom);

// Set contact div's displays to "none"
var $contactSectionLeft = $("#about-page .contact-section .left-column");
var $contactSectionRight = $("#about-page .contact-section .right-column");
$contactSectionLeft.css("display", "none");
$contactSectionRight.css("display", "none");

$(window).on("scroll", function(){
    checkContactSectionY();
});

function checkContactSectionY(){
    if( windowBottom  > contactSectionTop ){
      $(window).off("scroll");
      $contactSectionLeft.velocity("fadeIn", {display: "inline-block", duration: 500});
      $contactSectionRight.velocity("fadeIn", {display: "inline-block", duration: 500});
    }
};

// Do this on load just in case the user starts half way down the page
checkContactSectionY();
