    <?php  
    header("Content-type: text/html; charset=UTF-8");  
    session_start();  
    $name = $_POST['username'];  
    $password=$_POST['password'];  
    //$code=$_POST['code'];  
    // 连接数据库
    $con = mysql_connect('localhost','root','1851432302');  
    // 连接数据库失败提示信心
    if(!$con){  
        die('error:'.mysql_error());  
    }  
    // 选择数据库
    mysql_select_db('test'); 
    // 执行SQL查询语句 
    $result = mysql_query("select * from user where userPhone='$name'");  

    // 查询用户是否存在
    if( $row = mysql_fetch_array($result) ){ 
        // 查询密码是否正确 
        if( $row['userPassword'] == $password ){  
            echo 1; //登录成功 
        }else{  
            echo 2;//密码错误  
        }  
    }else{  
        echo 3;//用户不存在  
    }  
    ?>