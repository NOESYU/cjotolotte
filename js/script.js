$(".fam_list").hide();
$(".fam_btn").click(function(){
  $(".fam_list").slideToggle(100);
})


$(".sub_bg").hide();
$(".menu>li").mouseover(function(){
  $(this).children(".sub_bg").stop().slideDown(300);
})
$(".menu>li").mouseout(function(){
  $(this).children(".sub_bg").stop().slideUp(300);
})


$(".m_nav").hide();
$(".m_btn").click(function(){
  $(".m_nav").fadeIn(300);
  $(".m_menu_box").addClass("active");
})
$(".m_close, .m_nav_bg").click(function(){
  $(".m_nav").fadeOut(300);
  $(".m_menu_box").removeClass("active");
  $(".m_sub_bg").hide();
})

/* 브랜드 클릭시 m_sub_bg 보이기 */
/* this 로 접근해서 브랜드 제외 children 없으니 li 로 그냥 접근 */
$(".m_sub_bg").hide();
$(".m_menu>li").click(function(){
  $(this).children(".m_sub_bg").show();
})
$(".m_sub_back").click(function(){
  $(".m_sub_bg").fadeOut(100);
})


// main_slide 이미지
$(".main_wrap>img:nth-child(1)~").hide();

let i=0;
function slide(){
  i=i==6?0:i+1;
  $(".main_wrap>img").eq(i).show();
  $(".main_wrap>img").eq(i).siblings().hide();
}

setInterval(slide, 500);


// 스크롤 애니메이션
AOS.init();

let lastTop=0;
$(window).scroll(function(){
  let top=$(this).scrollTop();
  // top>lastTop : 스크롤내림, top<lastTop : 스크롤올림 
  if(top>lastTop){
    // margin-top 을 header(100px)보다 큰 값을 줘서 이동
    $(".header").css({"margin-top": "-105px"});
  }
  else{
    $(".header").css({"margin-top": "0"});
  }
  lastTop=top;

  if(top>100){
    $(".main_title_top").css({
      "padding-right":top, "transform":"scale(1.2)"
    })
    $(".main_title_bottom").css({
      "padding-left":top, "transform":"scale(1.3)", "color":"#ddd"
    })
  }
  else{
    $(".main_title_top").css({
      "padding-right":top, "transform":"scale(1)"
    })
    $(".main_title_bottom").css({
      "padding-left":top, "transform":"scale(1)", "color":"#000"
    })
  }
})
