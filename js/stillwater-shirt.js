// ==========================================
// STILLWATER SHIRT PAGE
// ==========================================

// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});

sr.reveal('.pocket-design-section img', {delay: 250});

sr.reveal('.screenprint-section img', {delay: 250});


// SHIRT DESIGN SECTION HEIGHT

$(document).ready(function(){
  var shirtDesignSectionHeight = $("#stillwater-shirt-page .shirt-design-section").height();
  var shirtDesignSectionHeadlineHeight = $("#stillwater-shirt-page .shirt-design-section h2").outerHeight();
  var shirtDesignDescriptionHeight = $("#stillwater-shirt-page .shirt-design-description").outerHeight();
  var shirtDesignImageContainerHeight = shirtDesignSectionHeight - shirtDesignSectionHeadlineHeight - shirtDesignDescriptionHeight;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#stillwater-shirt-page .shirt-design-image-container").css({"height": shirtDesignImageContainerHeight});
  } else {
    // window width is at least 767px
    $("#stillwater-shirt-page .shirt-design-image-container").css({"height": shirtDesignImageContainerHeight});
  }
});


// SCREENPRINTING SECTION HEIGHT

$(document).ready(function(){
  var screenprintImageContainerHeight = $("#stillwater-shirt-page .screenprint-image-container").outerHeight() + 150;
  var screenprintDescriptionHeight = $("#stillwater-shirt-page .screenprint-description").outerHeight() + 150;

  if (mediaQuerySmall.matches) {
    // window width is less than 767px

  } else if (mediaQueryMedium.matches) {
    // window width is less than 1025px
    $("#stillwater-shirt-page .screenprint-section").css({"height": screenprintDescriptionHeight});
  } else {
    // window width is at least 767px
    $("#stillwater-shirt-page .screenprint-section").css({"height": screenprintImageContainerHeight});
  }
});
