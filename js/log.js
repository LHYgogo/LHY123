// <!-- 选项卡 -->
$(".nav>li:first").addClass("hover");
$(".tab>.mlog:first").show().siblings().hide();
$(".nav>li").click(function(){
    $(this).addClass("hover").siblings().removeClass("hover");
    $(".tab>.mlog").eq($(this).index()).show().siblings().hide();
})

// <!-- 登录请求 -->
var oUser = document.getElementById("usr");
var oPwd = document.getElementById("pwd");
var oBtn = document.getElementById("btn");

oBtn.onclick=function(){
    var suser = oUser.value;
	var spwd = oPwd.value;

    ajaxPost("../php/log.php",`usr=${suser}&pwd=${spwd}`)
    .then(function(res){
        console.log(res);
    })
}    
    
function ajaxPost(url,data){
    var xhr = new XMLHttpRequest();
    xhr.open("POST",url);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(data);

    var promise = new Promise(function(resolved,rejected){
        xhr.onload=function(){
            if(xhr.status==200){
                resolved(xhr.response);
            }else{
                rejected("请求失败,错误码:"+xhr.status)
            }
        }
    })
    return promise;
}