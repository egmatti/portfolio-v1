// PARALLAX
// function InitParalax() {
//     var paralaxDom = document.getElementsByClassName("parallaxable")[0];
//     window.addEventListener("GlobalScroll", function(e) {
//         if (window.getComputedStyle(paralaxDom).position == "absolute") {
//             var perc = Math.min(e.target.scrollY / (verge.viewportH()), 1);
//             paralaxDom.style.transform = "translateY(" + (-perc*300) + "px)";
//         }
//     });
// }
//
// document.addEventListener("DOMContentLoaded", function(e) {
//     InitParalax();


// COFFEE APP PAGE MOCKUPS SLIDER
$(".coffee-app-slider-for").slick({
 arrows: false,
 asNavFor: ".coffee-app-slider-nav",
 fade: true,
 slidesToScroll: 1,
 slidesToShow: 1
});

$(".coffee-app-slider-nav").slick({
  arrows: true,
  asNavFor: ".coffee-app-slider-for",
  focusOnSelect: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3
});
