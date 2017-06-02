// GETTING STARTED EXAMPLE
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
// document.addEventListener("DOMContentLoaded", function(e) {
//     InitParalax();

// HOME PAGE BLOG SLIDER
$(".blog-slider-for").slick({
 arrows: false,
 asNavFor: ".blog-slider-nav",
 fade: true,
 slidesToScroll: 1,
 slidesToShow: 1,
 vertical: false
 // verticalSwiping: false
});

$(".blog-slider-nav").slick({
  arrows: true,
  asNavFor: ".blog-slider-for",
  infinite: true,
  focusOnSelect: true,
  slidesToScroll: 2,
  slidesToShow: 2,
  vertical: true
  // verticalSwiping: true
});


// COFFEE APP PAGE MOCKUPS SLIDER
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
  focusOnSelect: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 3
});


// GRAPHIC DESIGN PROJECTS HANDLEBARS
$(function () {
  var source = $("#project-post").html();
  var template = Handlebars.compile(source);

  var context = {
    project: [{
        title: "Chronicle Magazine",
        date: "2012–2015",
        text: "Logos, layout designs, and promotional material for the Chronicle, Clemson University's student art and literary magazine",
        image: "chronicle-cover",
      },{
        title: "Dogs! Booklet",
        date: "2015",
        text: "Layout design for a Graphic Communications class at Clemson University",
        image: "dogs-spread",
      },{
        title: "Jamaica Stickers",
        date: "2015",
        text: "Sticker designs for a Graphic Communications class at Clemson University",
        image: "stickers",
      },{
        title: "Stillwater T-shirt",
        date: "2015",
        text: "T-shirt design for a Graphic Communications class at Clemson University",
        image: "stillwater-t-shirt",
      },{
        title: "TopTix Marketing Collateral",
        date: "2016–2017",
        text: "Print and digital RFP responses, email marketing campaign designs, advertisements, and other marketing collateral for TopTix, a ticketing, CRM/marketing, and fundraising software company ",
        image: "toptix-proposal"
      },{
        title: "Dogtooth Album Artwork",
        date: "2016–2017",
        text: "Print and digital album artwork for emerging hip hop producer Dogtooth",
        image: "dogtooth-artwork-with-border"
    }]
  };

  var compiled = template(context);
  $(document.body).append(compiled);
});


// THE LATEST HANDLEBARS
$(function () {
  var source = $("#blog-post").html();
  var template = Handlebars.compile(source);

  var context = {
    post: [{
      title: "Developing a Personal Brand",
      date: "4.15.17",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "style-guide",
      position: "left"
    },{
      title: "Stax Records Insights",
      date: "4.13.17",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "stax",
      position: "right"
    },{
      title: "When JavaScript Finally Starts Making Sense",
      date: "4.11.17",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "hackathon",
      position: "left"
    },{
      title: "Applying Gradient Mesh Tool Techniques to CSS",
      date: "3.28.17",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "gradient-mesh-with-css",
      position: "right"
    },{
      title: "Album Artwork with the Gradient Mesh Tool (Part 2)",
      date: "3.24.17",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "ski-mask-2",
      position: "left"
    },{
      title: "UI Design at The Iron Yard",
      date: "3.11.17",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "the-iron-yard",
      position: "right"
    },{
      title: "Moving to Raleigh",
      date: "2.28.17",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "raleigh",
      position: "left"
    },{
      title: "DAW Basics",
      date: "2.6.17",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "splice-sample-pack-2",
      position: "right"
    },{
      title: "Music's Evolution Over the Past 60 Years",
      date: "1.15.17",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "anatomy-of-a-song",
      position: "left"
    },{
      title: "Drawing Class Takeaways",
      date: "12.11.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "tiepolo",
      position: "right"
    },{
      title: "Learning HTML, CSS, and JavaScript Basics",
      date: "12.5.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "sneaker-app",
      position: "left"
    },{
      title: "Applying for Music Industry Jobs",
      date: "11.26.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "warner-email",
      position: "right"
    },{
      title: "Freelance Music Marketing",
      date: "11.5.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "marketing-plan-v3",
      position: "left"
    },{
      title: "Keeping Up with the Kardashians (Halloween Style)",
      date: "11.1.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "halloween-v2",
      position: "right"
    },{
      title: "Networking with Twitter",
      date: "10.25.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "tweet",
      position: "left"
    },{
      title: "Improving My Drawings with Sighting",
      date: "10.20.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "sighting",
      position: "right"
    },{
      title: "Logo Ideation for an Emerging Producer",
      date: "10.14.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "rocket",
      position: "left"
    },{
      title: "Self-Portraits and Photo Editing",
      date: "10.9.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "photo-editing",
      position: "right"
    },{
      title: "A3C Conference",
      date: "10.7.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "a3c",
      position: "left"
    },{
      title: "Album Artwork with the Gradient Mesh Tool (Part 1)",
      date: "9.17.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "ski-mask-1",
      position: "right"
    },{
      title: "Saint Pablo Tour",
      date: "9.13.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "pablo",
      position: "left"
    },{
      title: "Saturday Morning Stroll on Sullivan's Island",
      date: "9.10.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "sullivan's",
      position: "right"
    },{
      title: "New Music Confab",
      date: "8.30.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "new-music-confab",
      position: "left"
    },{
      title: "Learning to Draw",
      date: "8.29.16",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "arts-119",
      position: "right"
    }]
  };

  var compiled = template(context);
  $(document.body).append(compiled);
});
