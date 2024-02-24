// スライダー 
$(function(){
  $('.slider-list').slick({
      accessibility: false,
      fade: true,
      autoplay: true,
      infinite: true,
      dots: false,
      arrows: false,
      autoplaySpeed: 1000,
      speed: 1000,
  });
});

// カーソルを当てると×になる
$(".header-menu").click(function () {
  $(this).toggleClass('active');
});