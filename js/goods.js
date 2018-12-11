// <!-- 返回顶部 -->
$(window).scroll(function(){
    if($(this).scrollTop()>=150){
        $(".not-find").show();
    }else{
        $(".not-find").hide();
}
})
$(".not-find").click(function(){
    $("html,body").stop().animate({scrollTop:0},400)
})


// <!-- 选项卡 -->

$(".mnav>li:first").addClass("hover")
$(".r-List:first").show().siblings().hide();
$(".goodsList:first").show().siblings().hide();
$(".mnav>li").click(function(){
    $(this).addClass("hover").siblings().removeClass("hover");
    $(".goodsList").eq($(this).index()).show().siblings().hide();
    $(".r-List").eq($(this).index()).show().siblings().hide();
})

//大图模式


$(".dd").click(function(){
    $(".goodsList").eq(4).show().siblings().hide();
    $(".dd").css({
        "background-color":"#FF1268"
    })
    $(".zk").css({
        "background-color":"#ddd"
    })
})     

$(".zk").click(function(){
    $(".goodsList").eq(0).show().siblings().hide();
    $(".zk").css({
        "background-color":"#ed0a75 "
    })
    $(".dd").css({
        "background-color":"#ddd"
    })

})


//APP下载划过效果；
$(".APP").mouseenter(function(){
    $(".find-download").stop().fadeIn()
})
$(".APP").mouseleave(function(){
    $(".find-download").hide()
})

//登录注册

$(".log").mouseenter(function(){
     $(".find-log").slideDown();
    // $(".find-log").css({"display":"block"})
 })

 $(".find-log").mouseenter(function(){
    $(".find-log").show();
 })

 $(".log").mouseleave(function(){
    // clearTimeout(timer)
    timer=setTimeout(function(){
        $(".find-log").hide();
    },1000)   
 })
 
 $(".find-log").mouseleave(function(){
    $(".find-log").stop().slideUp();
 })
