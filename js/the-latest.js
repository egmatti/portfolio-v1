// BLOG NAV HEIGHT AND DIRECTORY ROW POSITIONING

$(document).ready(function(){
  var firstRowFigureHeight = $("#the-latest-page .directory__figure--first-row").outerHeight();
  var blogNavContainerHeight = firstRowFigureHeight - 100 - 50;
  var blogNavHeight = blogNavContainerHeight - 75;
  $("#the-latest-page .blog-nav-container").css({"height": blogNavContainerHeight});
  $("#the-latest-page .blog-nav").css({"height": blogNavHeight});

  // var secondRowTranslate = blogNavHeight + 75 + 50;
  var secondRowTranslate = 50;
  $("#the-latest-page .directory__row--second").css({"transform": "translateY(-" + secondRowTranslate + "px)"});
  $("#the-latest-page .directory__row--other").css({"transform": "translateY(-" + secondRowTranslate + "px)"});
  $("#the-latest-page .directory__row--last").css({"transform": "translateY(-" + secondRowTranslate + "px)", "margin-bottom": "-" + secondRowTranslate + "px"});
});
