// BLOG NAV HEIGHT

$(document).ready(function(){
  var firstRowFigureHeight = $("#the-latest-page .directory__figure--first-row").outerHeight();
  var blogNavContainerHeight = firstRowFigureHeight - 100 - 50;
  var blogNavHeight = blogNavContainerHeight - 75;
  $("#the-latest-page .blog-nav-container").css({"height": blogNavContainerHeight});
  $("#the-latest-page .blog-nav").css({"height": blogNavHeight});
});
