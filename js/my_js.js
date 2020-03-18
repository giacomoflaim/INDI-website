/*$(window).scroll(function() {
  if ($(this).scrollTop() > 740) {
    $(".kit-button").removeClass("bottom-right").addClass("top-right");
  } else {
    $(".kit-button").removeClass("top-right").addClass("bottom-right");
  }
});*/

$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});