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
