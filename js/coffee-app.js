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


// WIREFRAME SECTION HEIGHT

$(document).ready(function(){
  var leftColumnHeight = $("#coffee-app-page .left-column").outerHeight();
  $("#coffee-app-page .wireframes-section").css({"height": leftColumnHeight});
});


// PROTOTYPE SECTION HEIGHT

$(document).ready(function(){
  var prototypeImageContainerHeight = $("#coffee-app-page .prototype-image-container").outerHeight() + 150;
  $("#coffee-app-page .prototype-section").css({"height": prototypeImageContainerHeight});
});
