// ==========================================
// BALLAD PAGE
// ==========================================

// BUTTON COLOR CHANGE

$("#ballad-page .button").click(function() {
  $(this).css({"background": "#0e5580", "border": "2px solid #0e5580"});
  $(this).find("span").css("color", "#fff");
});


// STYLE GUIDES SLIDER

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


// MOBILE PROTOTYPE SECTION HEIGHT

$(document).ready(function(){
  var mobilePrototypeImageContainerHeight = $("#ballad-page .mobile-prototype-image-container").outerHeight() + 150;
  $("#ballad-page .mobile-prototype-section").css({"height": mobilePrototypeImageContainerHeight});
});


// RESPONSIVE SITE SECTION HEIGHT

$(document).ready(function(){
  var responsiveSiteImageHeight = $("#ballad-page .responsive-site-section img").outerHeight() + 150;
  $("#ballad-page .responsive-site-section").css({"height": responsiveSiteImageHeight});
});
