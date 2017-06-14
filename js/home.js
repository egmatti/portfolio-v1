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
  slidesToScroll: 7,
  slidesToShow: 7,
  vertical: true
});


//HOME PAGE BLOG SLIDER NAV PANEL

$(document).ready(function(){
  var blogPostHeight = $("#blog-section .slick-current").outerHeight();
  $("#blog-section .blog-slider-nav").css({"height": blogPostHeight});

  $('#blog-section .slick-active').on( "click", function() {
    blogPostHeight = $("#blog-section .slick-current").outerHeight();
    $("#blog-section .blog-slider-nav").css({"height": blogPostHeight});
  });
});
