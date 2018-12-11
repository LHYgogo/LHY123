<?php
$usr = @$_POST["usr"];
$pwd = @$_POST["pwd"];

if(!$usr || !$pwd){
    die("账号密码不能为空");
}
// 操作数据 把内容放进数据库中;
$pwd = md5($pwd);

$host = "localhost";
$userName = "root";
$password = "";
$database = "user1807";

$conn = new mysqli($host,$userName,$password,$database);

if($conn -> connect_error){
    die(connect_error);
}


$sql = "SELECT username,password FROM usertable WHERE username=`$usr`";
$res = $conn->query($sql);

if($res->num_rows ==0){
    die("用户名不存在");
}

while($item = $res->fetch_assoc()){
    if($item["password"] ==$){
        die(json_encode($item));
    }
} 

echo "密码错误";

?>