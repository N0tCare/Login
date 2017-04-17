<?php 

	// 获取表单数据
	$userphone = $_POST['userphone'];
	$regpassword = $_POST['regpassword'];
	$username = "xiaoming";
	if( !$userphone || !$regpassword ){
		echo "手机号或密码不能为空";
		exit;
	}
	if( !get_magic_quotes_gpc()){
		$userphone = addslashes($userphone);
		$regpassword = addslashes($regpassword);
	}

	$con = mysql_connect('localhost','root','1851432302','test');
	if(mysqli_connect_errno()){
		echo "连接数据库失败，请稍后重试！";
		exit;
	}else{
		echo "数据库连接成功<br/>";
	}
	mysql_select_db("test", $con);
	$sql = "insert into user (userName,userPhone,userPassword) values('".$username."','".$userphone."','".$regpassword."')";
	echo "$sql<br/>";
	//$result = mysql_query($query,$db);
	// echo "$result</br>";
	// if($result){
	// 	echo $db->affected_rows."插入数据库！";
	// }else{
	// 	echo "数据库插入不成功！";
	// }
	// $db->close();
	if (!mysql_query($sql,$con)){
	  	die('Error: ' . mysql_error());
	  }
	echo "1 record added";

	mysql_close($con);

	// 连接数据库
	// $con = mysql_connect("localhost","root","1851432302",);
	// if(!$con){
	// 	die("Could not connect:".mysql_error());
	// }else{
	// 	echo "mysql connect successful!";
	// }
	// 创建数据库
	// if(mysql_query("CREATE DATABASE test1",$con)){
	// 	echo "Database has created.";
	// }else{
	// 	echo "Error creating database:".mysql_error();
	// }

	// 创建数据表
	// mysql_select_db("test1",$con);
	// $sql = "CREATE TABLE Persons(FirstName varchar(15), LastName varchar(15),age int)";
	// mysql_query($sql,$con);

	// // 关闭数据库
	// mysql_close($con);


 ?>