// MOCKUPS SLIDER

$(".synced-slider-for").slick({
 arrows: false,
 asNavFor: ".synced-slider-nav",
 fade: true,
 slidesToScroll: 1,
 slidesToShow: 1
});

$(".synced-slider-nav").slick({
  arrows: true,
  asNavFor: ".synced-slider-for",
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3
});
