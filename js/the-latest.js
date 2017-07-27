// ==========================================
// THE LATEST PAGE
// ==========================================

// DIRECTORY NAV HEIGHT AND DIRECTORY ROW POSITIONING

$(document).ready(function(){
  var firstRowFigureHeight = $("#the-latest-page .directory__figure--first-row").outerHeight();
  var directoryNavContainerHeight = firstRowFigureHeight - 100 - 50;
  var directoryNavHeight = directoryNavContainerHeight - 75;
  $("#the-latest-page .directory-nav-container").css({"height": directoryNavContainerHeight});
  $("#the-latest-page .directory-nav").css({"height": directoryNavHeight});

  // var secondRowTranslate = directoryNavHeight + 75 + 50;
  // var secondRowTranslate = 50;
  // $("#the-latest-page .directory__row--second").css({"transform": "translateY(-" + secondRowTranslate + "px)"});
  // $("#the-latest-page .directory__row--other").css({"transform": "translateY(-" + secondRowTranslate + "px)"});
  // $("#the-latest-page .directory__row--last").css({"transform": "translateY(-" + secondRowTranslate + "px)", "margin-bottom": "-" + secondRowTranslate + "px"});
});

// SCROLL REVEAL

window.sr = ScrollReveal({distance: "30px", duration: 500, scale: 0});
sr.reveal('.directory__figure--first-row', {delay: 425});
sr.reveal('.directory__figure--second-row', {delay: 250}, 175);
sr.reveal('.directory__figure--other-row', {delay: 250}, 175);
