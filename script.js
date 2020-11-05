$(function() {
  // 「#change-css」要素に対するclickイベントを作成してください
  $('#change-css').click(function(){
    $('#text').css('color','red');
    $('#text').css('font-size','20px');
  });  
});



// $(function(){
//     $("p").css("こんばんは") 
//     $("p").css("color","blue") 
//   })
 
  // $(window).load(function() {
  //   $('.flexslider').flexslider({
  //     animation: "slide"
  //   });
  // });
  // $(function(){
  //   var setImg = '#photo';
  //   var fadeSpeed = 1600;
  //   var switchDelay = 5000;

  //   $(setImg).children('img').css({opacity:'0'});
  //   $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'30'},fadeSpeed);

  //   setInterval(function(){
  //       $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
  //   },switchDelay);
});