// BLOG NAV HEIGHT

$(document).ready(function(){
  var firstFigureHeight = $("#the-latest-page .directory__figure--first").outerHeight();
  var blogNavContainerHeight = firstFigureHeight - 100 - 50;
  var blogNavHeight = blogNavContainerHeight - 75;
  $("#the-latest-page .blog-nav-container").css({"height": blogNavContainerHeight});
  $("#the-latest-page .blog-nav").css({"height": blogNavHeight});
});
