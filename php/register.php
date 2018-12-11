<?php
$usr = @$_POST["usr"];
$pwd = @$_POST["pwd"];

if(!$usr || !$pwd){
    die("账号密码不能为空");
}


$host = "localhost:";
$userName = "root";
$password = "";
$database = "user1807";

$conn = new mysqli($host,$userName,$password,$database);

    if($conn -> connect_error){
        die(connect_error);
    }
//   echo "连接成功";

//在插入数据库之前我们去判断是否重名；
//我们应该利用 SELECT FROM WHERE qu 判断；

$sqlselect = "SELECT username FROM usertable WHERE username='$usr'";
//echo $sqlselect;
$resselect = $conn->query($sqlselect);
if(!$resselect){
    die("数据库错误");
}

//查询出的结果大于一条，说明有重复的名字；
if($resselect->num_rows>=1){
    die("用户名重名");
}

//将将输入的内容插入数据库里；
$sql = "INSERT INTO usertable(username, password)VALUES('$usr','$pwd')";

$res = $conn->query($sql);
if(!$res){
    die("数据库错误");
}

$resmsg = array("msg"=>"success","stateCode"=>"1");

echo json_encode($resmsg);

?>
