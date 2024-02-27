$(function(){

  // /* ここにjQueryのコードを書く */
  // $("h1").hover(function(){
  //   $("h1").css("color","red")
  // })

    $(".question-contact").on("click",function(){
      let accordion = $(this).next(".question-contact-answer");
      $(accordion).slideToggle(300);
      $(this).toggleClass("open", 300)
    })

  });