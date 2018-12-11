function ShopCar(){
    
    }
    $.extend(ShopCar.prototype,{
        init(){
            this.loadJSON()
            .done(function(res){
                this.renderPag(res.data);
                this.sortElem();
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
            function propHeight(width,height){
                return  220 / width * height;
            }
            $(".shopList").html(str).html()+html;
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
        },
        sortElem(){
            var items = $(".concent").children();

            var heightArray = [];

            for(var i = 0 ; i<items.length; i++){
                if(i<5){
                    heightArray.push(items.eq(i).height())
                }else{
                    var minHeight = Math.min.apply(false,heightArray);
                    minIndex = heightArray.indexOf(minHeight);

                    heightArray[minIndex] = heightArray[minHeight] + itema.eq(i).height;

                    items.eq(i).css({
                        position:"absolute",
                        top:minHeight,
                        left:items.eq(minIndex).position().left
                    })

                }
            }
        $(".cont").height(items.eq(items.length -1))
        }
    })
     new ShopCar().init();