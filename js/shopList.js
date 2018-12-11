// <!--        返回顶部         -->
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

//  <!--      二级导航     -->
 
     //登录注册的二级导航
     $(".log").mouseenter(function(){
        $(".find-log").show();
       $(".find-log").css({"display":"block"})
    })
   
    $(".find-log").mouseenter(function(){
       $(".find-log").show();
    })
   
    $(".find-log").mouseleave(function(){
       $(".find-log").hide();
    })
   
    $(".mheader").mouseenter(function(){
       $(".find-log").hide();
   })
   
   $("document").mouseenter(function(){
       $(".find-log").hide();
   })
   
   
   
   //城市划过效果
   $(".province").mouseenter(function(){
        $(".Tnav").show();
    })
   
    $(".Tnav").mouseenter(function(){
       $(".Tnav").show();
    })
   
    $(".Tnav").mouseleave(function(){
       $(".Tnav").stop().hide();
    })
   
    $(".province").mouseleave(function(){
       $(".Tnav").stop().hide();
    })

      // 购物车

var cookieArray = JSON.parse($.cookie("shopCar")); 

$.ajax({
    url:"../json/shopCar.json",
    type:"get"
})
.done(function(res){
    var str = "";
    var arr = res.data;
    var resArray = [];

    for(var i = 0 ; i<cookieArray.length; i++){
        resArray.push(arr[cookieArray[i].id])

        str +=`
    <li>
        <a>
          <img src="${arr[i].image}">
        </a>
        <div class="pl">
          <h3 class="tit">${arr[i].title}<h3>
          <p class="adress">${arr[i].adress}</p>
          <p class="date">${arr[i].time}</p>
          <p class="price">
            <em>${arr[i].price}<em>
            ${arr[i].cont}
          <p>  
          <button class="btn" data-id="${i}">立即购买<button>
    </li>
`
    }
    $(".shopList").html(str)

})