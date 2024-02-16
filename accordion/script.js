$(function(){
  $(".open").on("click",function(){
    $(this).toggleClass("close")
    $("dd").slideToggle();
  });
});