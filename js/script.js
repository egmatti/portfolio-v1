// GETTING STARTED EXAMPLE
// $(document).ready(function(){
//   // jQuery code
// });


// FIXDED HEADER ON SCROLL
$("#home-page header").css("position", "fixed");

var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
     //downscroll code
       $("#home-page header").slideUp();
      //  $("#home-page header").css("position", "static");
   } else {
      // upscroll code
      $("#home-page header").slideDown();
      // $("#home-page header").css("position", "fixed");
   }
   lastScrollTop = st;
}, false);
