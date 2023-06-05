$(function(){
  // 슬라이드 : 페이드 효과
  let currentIndex = 0;
  $(".slider").hide().first().show();

  setInterval(function(){
    let nextIndex = (currentIndex + 1) % 3;

    $(".slider").eq(currentIndex).fadeOut(1200); //1.2초
    $(".slider").eq(nextIndex).fadeIn(1200); //1.2초

    currentIndex = nextIndex
  },3000)

  // 메뉴 : 하나씩 나오기
  $(".nav > ul > li").mouseenter(function(){
    $(this).find(".submenu").stop().slideDown(200) // 0.2초
  })

  $(".nav > ul > li").mouseleave(function(){
    $(this).find(".submenu").stop().slideUp(200) // 0.2초
  })

  // 탭메뉴
  const tabBtn = $('.info-menu > a');
  const tabCont = $('.info-cont > div');
  tabCont.hide().eq(0).show();
  
  tabBtn.on('click',function(){
    const index = $(this).index(); // 내가 클릭한거의 인덱스번호 가져옴.

    $(this).addClass('active').siblings().removeClass('active');
    tabCont.eq(index).show().siblings().hide();
  })

  // 팝업
  $(".popup-btn").on('click',function(){
    $('.popup-view').show()
  })
  $('.popup-close').on('click',function(){
    $('.popup-view').hide()
  });
});
