$(".switch").click(function(){
  $(this).css("background", "yellow").find("p").text("On");
  $('.panel').css("background", "yellow");
});
