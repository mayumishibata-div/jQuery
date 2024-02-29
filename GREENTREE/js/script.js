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

  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "fade", // フェード切り替え
    // 自動再生
    autoplay: {
      delay: 4000, // 4秒後に次のスライドへ
      disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
    },
    speed: 2000, // 2秒かけてフェード
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(function () {
    const height = $(".header").height();
    $("main").css("margin-top", height);
  });
  

  $(".header-nav-list a[href*='#']").click(function(){
    const pageLink = $(this).attr("href");
    const pos = $(pageLink).offset().top;
    $("body, html").animate({scrollTop: pos},500);
    return false;
  });
  