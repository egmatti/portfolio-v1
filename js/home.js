// ABOUT SECTION SCROLL REVEAL
window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.about-section div', {delay: 250});
sr.reveal('.about-section img', {delay: 475});

sr.reveal('.blog-section .share-figure', {delay: 250});

sr.reveal('.instagram-slider-for__post img', {delay: 250}, 175);
sr.reveal('.button-instagram', {delay: 1025});

sr.reveal('.contact-section .left-column', {delay: 250});
sr.reveal('.contact-section .right-column', {delay: 250});


// BLOG SLIDER

$(".blog-slider-for").slick({
 arrows: false,
 asNavFor: ".blog-slider-nav",
 fade: true,
 slidesToScroll: 1,
 slidesToShow: 1,
 vertical: false
});

$(".blog-slider-nav").slick({
  arrows: false,
  asNavFor: ".blog-slider-for",
  infinite: false,
  focusOnSelect: true,
  slidesToScroll: 7,
  slidesToShow: 7,
  vertical: true
});


// BLOG SLIDER NAV PANEL HEIGHT

$(document).ready(function(){
  var blogPostHeight = $("#home-page .blog-section .slick-current").outerHeight();
  $("#home-page .blog-section .blog-slider-nav").css({"height": blogPostHeight});

  $('#home-page .blog-section .slick-active').on( "click", function() {
    blogPostHeight = $("#home-page .blog-section .slick-current").outerHeight();
    $("#home-page .blog-section .blog-slider-nav").css({"height": blogPostHeight});
  });
});


// INSTAGRAM SLIDER

$(".instagram-slider-for").slick({
 arrows: true,
 infinite: true,
 slidesToScroll: 1,
 slidesToShow: 3
});
