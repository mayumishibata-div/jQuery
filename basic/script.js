$(function(){
  $("p").css("color", "#f00");

  // 複数のプロパティを指定する場合
  // $("p").css({"color":"#f00", "font-weight": "bold"});
  // $("p.test2").css("color", "#000000");
  // $("p#test3").css("color", "#303fff");
  // $("p.test2, #test3").css("color", "#c0c0c0");

  // $("p").append("サンプル")
  // 同じセレクタに対して複数のメソッドを追記する方法（メソッドチェーン）
    // $("p").css({"color":"f00", "font-weight": "bold"}).append("sample");
});

  // $("p").addClass("bold")
  // // $("p").removeClass("bold")

  // var text1 = $("p").text();
  // console.log(text1)

  // $("p").on("click", function(){
  //   $(this).toggleClass("toggle")
  // })

// レッスン12
  // onoffイベント
  // $("p").on("click", function(){
  //   $(this).addClass("toggle")
  // })

  // $("p").on("dblclick", function(){
  //   $(this).removeClass("toggle")
  // })

  // $("#test3").on("dblclick",function(){
  //   $(this).css({"color":"#006400", "font-weight": "bold"})
  // })

  // $(".test4").on("click",function(){
  //   $("p").off("dblclick")
  // })

  // レッスン13
// $(function(){
//   $("p").html("HTMLメソッドによって置き換える");
//   $(".test4").html("<p>うまくいきましたか？</p>")
// })

// レッスン14 
$(function(){
  // $("p").hide(2000);
  $("p").show()
})