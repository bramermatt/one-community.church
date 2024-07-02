var a = $(".topnav").offset().top;
$(document).on('scroll', function() {
 if ($(this).scrollTop() > 10) {
  $('.topnav').addClass("scrolled");
 } else {
  $('.topnav').removeClass("scrolled");
 }
});