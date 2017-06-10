// HOME PAGE BLOG SLIDER
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
  slidesToScroll: 6,
  slidesToShow: 6,
  vertical: true
});


//HOME PAGE BLOG SLIDER NAV PANEL
var blogPostHeight = $("#blog-section .slick-active").outerHeight();
$("#blog-section .blog-slider-nav").css({"height": blogPostHeight});

$('#blog-section .slick-active').on( "click", function() {
  var blogPostHeight = $("#blog-section .slick-active").outerHeight();
  $("#blog-section .blog-slider-nav").css({"height": blogPostHeight});
});
