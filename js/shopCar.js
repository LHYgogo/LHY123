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
// $.ajax({
//     type:"get",
//     url:"../json/shopCar.json",
//     success:function(res){
//         var arr = res.data;
//         console.log(res);
//         var str = "";
//         for (i in arr){
//             str +=`
//                <li>
//                   <a>
//                     <img src="${arr[i].image}">
//                   </a>
//                   <div class="pl">
//                     <h3 class="tit">${arr[i].title}<h3>
//                     <p class="adress">${arr[i].adress}</p>
//                     <p class="date">${arr[i].time}</p>
//                     <p class="price">
//                       <em>${arr[i].price}<em>
//                       ${arr[i].cont}
//                     <p>  
//                     <button class="btn" data-id="${i}">加入购物车<button>
//                 </li>
//             `
//         }
//         $(".shopList").html(str)
//     }
// })


function ShopCar(){

}
$.extend(ShopCar.prototype,{
    init(){
        this.loadJSON()
        .done(function(res){
            this.renderPag(res.data);
        }.bind(this))
        this.handleEvent();
        this.showNum();
    },
    loadJSON(){
        return $.ajax({
            url:"../json/shopCar.json",
            type:"get"
        })
    },
    renderPag(arr){
        var str = "";
        for (i in arr){
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
                    <button class="btn" data-id="${i}">加入购物车<button>
                </li>
            `
        }
        $(".shopList").html(str)
    },
    handleEvent(){
        $(".concent ul").on("click",".btn",$.proxy(this.addCar,this))
        $(".remove button").on("click",$.proxy(this.removeShopCar,this))
    },
    addCar(event){
        var evt = event || window.event;
        var target = evt.target || evt.srcElement;
        var goodsId = $(target).attr("data-id");

        if($.cookie("shopCar") === undefined){
            $.cookie("shopCar",`[{"id":${goodsId},"num":"1"}]`)
        }else{
            var cookieArrar = JSON.parse($.cookie("shopCar"))

            var hasSame = false;
            for(var i = 0 ; i<cookieArrar.length; i++){
                if(cookieArrar[i].id == goodsId){
                    cookieArrar[i].num ++;
                    hasSame = true;
                }
            }
            if(hasSame === false){
                var itemObject ={
                    id:goodsId,
                    num:1
                }
                cookieArrar.push(itemObject)
            }
            $.cookie("shopCar",JSON.stringify(cookieArrar));
            console.log(cookieArrar)
        }
        this.showNum();
    },
    showNum(){
        if($.cookie("shopCar") == undefined){
            $(".car span").html(0);
            return;
        }
        var cookieArrar = JSON.parse($.cookie("shopCar"));
        var sum = 0;
        for(var i = 0 ; i<cookieArrar.length; i++){
            sum += Number(cookieArrar[i].num);
        }
        $(".car span").html(sum);
    },
    removeShopCar(){
        $.removeCookie("shopCar");
        this.showNum()
    }
})
 new ShopCar().init();