// ==========================================
// BLOG POST PAGE
// ==========================================

// FIXED SHARE FIGURE ON SCROLL

// Get the position from the top of the page
var startY = 445;

$(window).scroll(function(){
    checkY();
});

function checkY(){
    if( $(window).scrollTop() > startY ){
        $("#blog-post-page figure").css({"margin-left": "8.25%", "position": "fixed", "transform": "translate(25px, -450px)"})
        $("#blog-post-page .blog-post-container").css({"left": "190px"})
    } else {
      $("#blog-post-page figure").css({"margin-left": "0%", "position": "relative", "transform": "translate(0px, 0px)"})
      $("#blog-post-page .blog-post-container").css({"left": "60px"})
    }
}

// Do this on load just in case the user starts half way down the page
checkY();
