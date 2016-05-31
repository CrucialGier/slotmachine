$(document).ready(function(){
  $("#start").click(function(){
    alert("Game Starting, Pull the Handle");
    $(".slot").fadeOut();
    $("#start").toggle();
    $("#end").toggle();
  });

  $("#end").click(function(){
    $(".slot").fadeIn();
  });
});
