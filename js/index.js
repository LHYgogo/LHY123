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



// <!--          头部            -->
$(".header").load().slideDown(500);
$(".close").click(function(){
    $(".header").slideUp(500)
})

// <!--      轮播图      -->

function Broadcast(select){
    this.el = $(select),
    this.index = 0;
    this.timer = null;
    this.start();
    this.leftB();
    this.rightB();
    this.clearT();
    this.openT();
    this.changeSm();

}

Broadcast.prototype = {
    start(){
        timer=setInterval(function(){
            this.changeImgR();
            this.changeSnav();
        }.bind(this),5000)

    },
    changeImgL(){
        var oUl = this.el.children(".scroll");
        if(this.index == 0){
            oUl.css({
                left: -$(".scroll li").width() * ($(".scroll li").children().length-1)
            })
            this.index = $(".scroll li").children().length-2;
        }else{
            this.index--
        }
        oUl.stop().animate({
            left:-$(".scroll li").width() * this.index,
        })
    },
    changeImgR(){
        var oUl = this.el.find(".scroll");
        if(this.index == $(".scroll li").children().length-1){
            oUl.css({left:0})
            this.index=1;
        }else{
            this.index++;
        }
        oUl.stop().animate({
            left:-$(".scroll li").width() * this.index,
        })
    },
    changeSnav(){
        this.el.children(".smNav").children().eq(this.index>=9? 0 : this.index).addClass("active").siblings().removeClass("active")
    },
    changeSm(){
        var that = this;
        this.el.children(".smNav").children().mousemove(function(){
            that.index=$(this).index()-1;
            that.changeImgR();
			that.changeSnav();
        })

    },
    leftB(){
        this.el.find(".lBtn").click(function(){
            this.changeImgL();
            this.changeSnav();
        }.bind(this))

    },
    rightB(){
        this.el.find(".rBtn").click(function(){
            this.changeImgR();
            this.changeSnav();
        }.bind(this))

    },
    clearT(){
        $(".banner").mouseenter(function(){
            clearInterval(timer)
        })

    },
    openT(){
        $(".banner").mouseleave(function(){
            timer=setInterval(function(){
                this.changeImgR();
                this.changeSnav();
            }.bind(this),5000)
        }.bind(this))

    }
}
new Broadcast(".banner")


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


//APP下载划过效果；
$(".APP").mouseenter(function(){
    $(".find-download").stop().fadeIn()
})
$(".APP").mouseleave(function(){
    $(".find-download").hide()
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
