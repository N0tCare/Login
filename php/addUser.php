
    <?php  
    header("Content-type: text/html; charset=UTF-8");  
    session_start();  
    // 这里接收的的ajax里面data的json格式的数据
    $userphone = $_POST['userphone'];  
    $regpassword = $_POST['regpassword'];  
    $code = $_POST['code'];  
    // 连接数据库
    $con = mysql_connect('localhost','root','1851432302');  
    // 连接数据库失败提示信心
    if(!$con){  
        die('error:'.mysql_error());  
    }  
    // 选择数据库
    mysql_select_db('test'); 
    // 查询输入的用户名
    $result = mysql_query("select * from user where userPhone='$userphone'");  
    if($code == "1234"){  
        // 检查用户名是否存在
        if( $row = mysql_fetch_array($result) ){  
            echo 1;//用户已存在  
        }else{
            // 注册成功  将用户数据插入到数据库中
            $sql = "insert into user (userName,userPhone,userPassword) values('".$username."','".$userphone."','".$regpassword."')";
            // "insert into 'user' ('userPhone','userPassword') values ('$userphone','$regpassword')"
            mysql_query( $sql);  
            echo 2;  
        }  
    }else{  
        echo 0; // 验证码错误
    } 
    ?>