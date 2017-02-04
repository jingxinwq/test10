<?php


	$name = $_POST["name"];
	$password = $_POST["password"];
	//1. 连接数据库
	$con = mysqli_connect("localhost","root","","test");


	mysqli_query($con,"set names utf8");

	$sql = "INSERT INTO `userinfo`(`id`, `name`, `password`) VALUES ('','$name','$password')";

	//2.操作数据库
	$result = mysqli_query($con,$sql);


	if($result){
		echo $_POST["name"];
	}else{
		echo 0;
	}

	//查看一下数据错误提示
	//var_dump(mysqli_error($con));

	//3.关闭数据库连接

	mysqli_close($con);
?>