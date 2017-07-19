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
