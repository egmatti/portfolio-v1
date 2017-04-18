// $(document).ready(function(){
//   // jQuery code
// });


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
//
//
// document.addEventListener("DOMContentLoaded", function(e) {
//     InitParalax();

$(".mockups-carousel-for").slick({
 arrows: false,
 asNavFor: ".mockups-carousel-nav",
 fade: true,
 slidesToScroll: 1,
 slidesToShow: 1
});

$(".mockups-carousel-nav").slick({
  arrows: true,
  asNavFor: ".mockups-carousel-for",
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3
});
