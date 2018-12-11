
//表单验证
var aInput=document.querySelectorAll("[id]");
var find = document.getElementById("hide")

for(var i=0; i<aInput.length; i++){
	aInput[i].onfocus=function(){
	renderLabel(this,"show")
    }
	aInput[i].onblur=function(){
	renderLabel(this,"hide")
	}

	aInput[1].onfocus=function(){
	renderLabel(this,"show")
	find.style.display="block"
	}

	aInput[1].onblur=function(){
	find.style.display="none"
	}

	aInput[4].onclick=function(){
	renderLabel(this,"show")
	}
	aInput[4].onmousedowm=function(){
	renderLabel(this,"hide")
	}
}

//封装一个函数；
function renderLabel(elem,show,vaild,tip){
	var attrString=elem.id;
	var selectString="label[for="+attrString+"]";
	var oLabel=document.querySelector(selectString);
	//判断显示还是隐藏
	if(show=="show"){
		oLabel.style.display="block";
	}else if(show=="hide"){
		oLabel.style.display="none";
	}

	//根据验证结果更新 元素类名;
	if(vaild==undefined) return 0;
	if(vaild){
		oLabel.innerHTML=tip;
		oLabel.className="success"
	}else{
		oLabel.innerHTML=tip;
		oLabel.className="error"
	}
}

//设置电话号码
function vaildTelStr(){
	var reg=/^[1][3,4,5,7,8][0-9]{9}$/;
	var vaildStr=this.value;
	if(reg.test(vaildStr)){
		renderLabel(this,"hide",true,"")
	}else{
		renderLabel(this,"show",false,"手机号码格式不正确，请重新输入")
	}
}
aInput[0].addEventListener("blur", vaildTelStr)

//设置密码
function vaildPawStr(){
var reg=/^[\!\@\#\$\%\^\-\_a-z0-9]{6,20}$/i;
var vaildStr=this.value;
if(reg.test(vaildStr)){
	renderLabel(this,"hide",true,"")
}else{
	renderLabel(this,"show",false,"密码设置不符合要求")
}   

		//验证密码强度；
		var strength = 0 ;//设置一个变量；
    var regNumber=/\d/g//设置一个正则为全局检索0-9的数字；
    if(regNumber.test(vaildStr)){//判定若为true，让strength自增；
        strength++;
    }

    var regWord=/[a-z]/gi;
    if(regWord.test(vaildStr)){
        strength++;
    }

    var regTocken=/[\!\@\#\$\%\^\&\*\_\-\!\?]/g;
    if(regTocken.test(vaildStr)){
        strength++;
    }

    if(strength>=2){//判定若强度为3时，让label隐藏，反之显示并获取tip内的提示；
        renderLabel(this,"hide",true,"")
    }else{
        renderLabel(this,"show",false,"密码设置不符合要求")
    }
     }
	aInput[1].addEventListener("blur", vaildPawStr)
    
	//密码验证；
	function vaildConfirmPawStr(){
    if(this.value==aInput[1].value){//若当前事件的value与密码的value相等，则隐藏；反之则显示；
        renderLabel(this,"hide",true,"")
    }else{
        renderLabel(this,"show",false,"两次输入的密码不一致，请重新输入")
    }
}
aInput[3].addEventListener("blur",vaildConfirmPawStr)

//邮箱设置；
function vaildEmailStr(){
    var reg=/^\w{6,20}@[a-zA-Z]{2,5}\.[a-z]{2,7}$/;
    var vaildStr=this.value;
    if(reg.test(vaildStr)){
        renderLabel(this,"hide",true,"")
    }else{
        renderLabel(this,"show",false,"请输入正确邮箱")
    }
}
aInput[4].addEventListener("blur",vaildEmailStr);


 

//  <!-- 注册 -->


var oUser = document.getElementById("usr");
var oPwd = document.getElementById("pwd");    
var oBtn = document.querySelector("button");

oBtn.onclick=function(){
    var suser = oUser.value;
    var spwd = oPwd.value;

    ajaxPost("../php/register.php",`usr=${suser}&pwd=${spwd}`)
    .then(function(res){
        var success = true;
        console.log(res)
                try{
                    JSON.parse(res);
                    
                }catch(error){
                    console.log(error);
                    success = false;
                }
                console.log(success);
                if(success){
                    location.href = "log";
                }
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
                rejected("请求失败，错误码："+xhr.status)
            }
        }
    })
    return promise;
}
