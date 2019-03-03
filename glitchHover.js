$(document).ready(function(){
  $("ul li").hide();
  $("ul li").each(function(i) {
      $(this).delay(i*400).fadeIn(110);
  });
});