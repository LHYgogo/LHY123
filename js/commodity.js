// <!-- 隐藏菜单显示 -->
    $(".TT").mouseenter(function(){
      $(".find").show();
    })

    $(".find").mouseenter(function(){
      $(".find").show();
    })

    $(".find").mouseleave(function(){
      $(".find").hide();
    })

    // $(".wrap").mouseenter(function(){
    //   $(".find").show();
    // })
      

    $(".TT").mouseleave(function(){
      $(".find").stop().hide();
    })

 


// <!-- 鲜花滑过效果     -->


  $(".m-flowers").mouseenter(function(){
    $(".ico").css({
      "border":"1px solid #ddd",
      "borderRadius":"50%"
    })
    $(".txt1").css({
      "display":"block"
    });
    $(".num").css({
      "display":"none"
    })
  })

  $(".m-flowers").mouseleave(function(){
    $(".ico").css({
      "border":"0",
    })
    $(".txt1").css({
      "display":"none"
    });
    $(".num").css({
      "display":"block"
    })
  })

  //演出时间滑过
$(".time1 li").click(function(){
  $(this).css({
    "borderColor":"#ddd"
  })
})

$(".time>span").click(function(){
  $(".time1 li").css({
    "borderColor":"#ed0a75"
  })
})

//滑过二维码

$(".sao").mouseenter(function(){
  $(".sao p").stop().fadeIn();
})
$(".sao").mouseleave(function(){
  $(".sao p").stop().fadeOut();
})





// <!-- 放大镜 -->

    // 选项卡
$(".bottom>li:first").show()
$(".small>img:first").show().siblings("img").hide();
$(".big>img:first").show().siblings().hide();

$(".bottom>li").mouseenter(function(){
    $(".small>img").eq($(this).index()).show().siblings("img").hide();
    $(".big>img").eq($(this).index()).show().siblings().hide();
})

//放大镜
function Magnifier(){

}

$.extend(Magnifier.prototype,{
    init(){
        this.smallBox = $(".small");
        this.bigBox = $(".big");
        this.sBox =this.smallBox.find(".box");
        this.bigImg = this.bigBox.find("img");
        this.smallImg = this.smallBox.find("img");
        
        this.widthProp = this.bigBox.width() / this.sBox.width();
        this.heightProp = this.bigBox.height() / this.sBox.height();

        this.bigImg.width(this.widthProp * this.smallBox.width()) 
        this.bigImg.height(this.heightProp * this.smallBox.height())

        this.handleEvent();
    },
    handleEvent(){
        this.smallBox.mouseenter(function(){
            this.overEvent();
        }.bind(this))

        this.smallBox.mouseleave(function(){
            this.outEvent();
        }.bind(this))
        
        this.smallBox.mousemove(function(){
          this.moveEvent();
        }.bind(this))

        this.smallBox.mousewheel(function(){
          this.boxScale();
        }.bind(this))
    },
    overEvent(){
        this.sBox.fadeIn();
        this.bigBox.fadeIn();

    },
    outEvent(){
        this.sBox.fadeOut();
        this.bigBox.fadeOut();

    },
    moveEvent(event){
      var evt = event || window.event;
      var nLeft = evt.offsetX;
      var nTop = evt.offsetY;

      this.posElem({
        left:nLeft - this.sBox.width() / 2,
        top: nTop - this.sBox.height() / 2
      })
    },
    posElem(pos){
      maxLeft = this.smallBox.width() - this.sBox.width();
      pos.left= pos.left <= 0 ? 0 : pos.left;
      pos.left = pos.left >=maxLeft? maxLeft : pos.left;

      maxTop = this.smallBox.height() - this.sBox.height();
      pos.top = pos.top<=0? 0 : pos.top;
      pos.top = pos.top>=maxTop ? maxTop : pos.top;  

      this.sBox.css({
        left:pos.left,
        top:pos.top
      });

      var tLeft = this.smallBox.width() - this.sBox.width();
      var tTop = this.smallBox.height() - this.sBox.height();

      var leftP = parseInt(pos.left / tLeft * 100) / 100;
      var topP = parseInt(pos.top / tTop * 100) / 100;

      var tbLeft = this.bigBox.width() - this.bigImg.width();
      var tbTop = this.bigBox.height() - this.bigImg.height();

      this.bigImg.css({
        left:tbLeft * leftP,
        top: tbTop * topP 
      })
    },
    boxScale(event,detal,detalX,detalY){
      console.log(detal)
      if(detal <= -1){
        if(this.sBox.width()<=50){
          return 0 ;
        }
        this.sBox.css({
          width:"-=2",
          height:"-=2",
          left:"+=1",
          top:"+=1"
        })
      }else if(detal>=1){
        if(this.sBox.width()>=200){
          return 0 ;
        }
        this.sBox.css({
            width:"+=2",
            height:"+=2",
            left:"-=1",
            top:"-=1"
        })
      }
      this.widthProp = this.bigBox.width() / this.sBox.width();
      this.heightProp = this.bigBox.height() / this.sBox.height();

      this.bigImg.width(this.widthProp * this.smallBox.width()) 
      this.bigImg.height(this.heightProp * this.smallBox.height())
      
      this.posElem({
          left:this.sBox.position().left,
          top:this.sBox.position().top
          })
        return false;
      }
  
  })

var magnifier = new Magnifier();
magnifier.init();



//吸顶悬浮
var offsetTop = $(".M-nav").offset().top
$(document).scroll(function(){
  if($(document).scrollTop()>=offsetTop){
    if($(".M-nav").hasClass("active")) return;
    $(".M-nav").addClass("active");
    $(".M-nav p").show();
    $(".M-nav p").stop().animate({
      left:830,
    },500)
  }else{
    if(!$(".M-nav").hasClass("active")) return;
    $(".M-nav").removeClass("active")
    $(".M-nav p").hide();
    $(".M-nav p").stop().animate({
      left:680,
    },500)
  }
})

//切换

$(".M-nav>li:first").addClass("hover")
$(".common:first").show().siblings().hide();

$(".M-nav>li").click(function(){
  $(this).addClass("hover").siblings().removeClass("hover");
  $(".common").eq($(this).index()).show().siblings().hide();
})

//滑过右边栏
$(".subitem").mouseenter(function(){
  $(".s-ewm").show();
})
$(".subitem").mouseleave(function(){
  $(".s-ewm").hide();
})


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
