// $(function(){
//   $(".a").on("mouseover", function(){
//     $(this).css("margin-left", "100px")
//   });

//   $(".b").on("mouseover", function(){
//     $(this).css("margin-left", "200px")
//   });

//   $(".c").on("mouseover", function(){
//     $(this).css("margin-left", "300px")
//   })
// });

// $(function(){
//   $(".a").on("mouseover", sample);
//   $(".b").on("mouseover", sample);
//   $(".c").on("mouseover", sample);
//   function sample(){
//     $(this).css("margin-left", "100px")
//   }
// })


// Lesson22

// let name = "tanaka"

$(function(){
  let name = "tanaka"
  $(sample(name))

  function sample(name){
    console.log("あなたの名前は" + name + "さんですね")
  }
})

// Lesson23
$(function(){
  addsample(1,2)
  addsample(4,3)
  addsample(1,100)

  function addsample (num1, num2){
    var rslt = num1 + num2;
    console.log(rslt)

    if (rslt == 3){
      console.log("処理結果は" + rslt + "です")
    }
    else {
      console.log("処理結果は3以外です")
    }
  }
})