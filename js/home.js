// HOME PAGE BLOG SLIDER
$(".blog-slider-for").slick({
 arrows: false,
 asNavFor: ".blog-slider-nav",
 fade: true,
 slidesToScroll: 1,
 slidesToShow: 1,
 vertical: false,
 verticalSwiping: false
});

$(".blog-slider-nav").slick({
  arrows: false,
  asNavFor: ".blog-slider-for",
  infinite: true,
  focusOnSelect: true,
  slidesToScroll: 6,
  slidesToShow: 6,
  vertical: true,
  verticalSwiping: true
});
