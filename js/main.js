
$(function(){
	// ***************json存储登录注册时的提示信息***************
	var loginRegisterTip = {
		'phoneOrPassowrd_blank': '用户名或密码不能为空！',
		'userPhone_format': '手机号码格式不对!',
		'userPhone_wrong': '该用户不存在！',
		'userPhone_exist': '该用已存在！',
		'userPassword_wrong': '密码错误！',
		'imgVerify_blank': '图片验证码不能为空！',
		'imgVerify_right': '验证码正确!',
		'imgVerify_wrong': '图片验证码不正确！',
		'phoneVerify_blank': '手机验证码不能为空！',
		'phoneVerify_length': '手机验证码为四位数！',
		'phoneVerify_wrong': '手机验证码不正确！'

	};
	// **************登录注册验证提示信息**************
	function loginRegTip(txttip) {
		$(".mask2").show();
        	$(".reg-tip-box").fadeIn(1500,function () {
        		$(".mask2").fadeOut(2000,function () {
        			$(".reg-tip-box").hide(1000);
        		});
        	});
            $(".reg-tip strong").addClass("icon-sad");
            $(".reg-tip span").text(txttip);
	}
	// ***************弹出登录注册***************
	function popUp(id){
		if( id == "#login_btn" ){
			$(id).on("click",function(event){
				$(".mask")
					.slideDown(1000);
				$(".login-wapper")
					.delay(500)
					.slideDown(1000); 
				event.stopPropagation();
			});
		}else if( id == "#register_btn") {
			$(id).on("click",function(event){
				$(".mask")
					.slideDown(1000);
				$(".register-wapper")
					.delay(500)
					.fadeIn(1000);
				event.stopPropagation(); 
			});
		}

	}
	popUp("#login_btn");
	popUp("#register_btn");

	// ***************立即注册***************
	$("#liji_register").on("click",function(event){
		event.stopPropagation();
		$(".login-wapper").slideUp(1000);
		$(".register-wapper").delay(1000).fadeIn(500);
	});

	// ***************立即登录***************
	$("#liji_login").on("click",function(event){
		event.stopPropagation();
		$(".register-wapper").fadeOut(1000);
		$(".login-wapper").delay(1000).slideDown(500);
	});


	// ***************点击空白处隐藏***************
	function hidden_popUp(popup){
		$(document.body).on("click",function(event){
			var target = $(event.target); 
			if(event.target != target && target.closest(popup).length == 0 ){
				if( $(popup).css("display") == "block" ){
					$(".mask")
					.delay(500)
					.fadeOut(1000);
				$(popup)
					.fadeOut(1000);

				}
			}
			event.stopPropagation();
		});
	}
	hidden_popUp(".login-wapper");

	// ***************点击输入框隐藏文字和边框动画***************
	function hidden_txt(id){
		$(id).on("focus blur",function(event){
			event.stopPropagation();
			var $this = $(this);
			if( event.type == "focus" ){ 
				$this.siblings("span").css("color","#666");
				// 添加边框动画
				$(".login-wapper").css("animation","colors 20s ease infinite");
				}else if(event.type == "blur"){
					$this.siblings("span").css("color","#fff");
					$(".login-wapper").css("animation","none");
				}
			});
		// 隐藏输入框里面span的文字
		$(id).on("input",function(event){  
			if( $(this).val() != "" ){
				$(this).siblings("span").fadeOut();
			}else {
				$(this).siblings("span").fadeIn();
			}
			event.stopPropagation()
		});
	}

	hidden_txt("#username");
	hidden_txt("#password");


	// ***************点击close按钮关闭注册框***************
	$("#close_reg").on("click",function(event){
		event.stopPropagation();
		$(".register-wapper").fadeOut(1000);
		$(".mask").fadeOut(1000);

	});

	// ***************js验证码***************
	    var inp = document.getElementById('inputCode');
	    var code = document.getElementById('code');
	    // 创建提示信息div
	    var $div = "<div class='input-tip'></div>"; 

	    var c = new KinerCode({
	        len: 4,//需要产生的验证码长度
	//        chars: ["1+2","3+15","6*8","8/4","22-15"],//问题模式:指定产生验证码的词典，若不给或数组长度为0则试用默认字典
	        chars: [
	            1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
	            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	        ],//经典模式:指定产生验证码的词典，若不给或数组长度为0则试用默认字典
	        question:false,//若给定词典为算数题，则此项必须选择true,程序将自动计算出结果进行校验【若选择此项，则可不配置len属性】,若选择经典模式，必须选择false
	        copy: false,//是否允许复制产生的验证码
	        bgColor:"",//背景颜色[与背景图任选其一设置]
	        // bgImg:"bg.jpg",//若选择背景图片，则背景颜色失效
	        randomBg : false,//若选true则采用随机背景颜色，此时设置的bgImg和bgColor将失效
	        inputArea: inp,//输入验证码的input对象绑定【 HTMLInputElement 】
	        codeArea: code,//验证码放置的区域【HTMLDivElement 】
	        click2refresh:true,//是否点击验证码刷新验证码
	        false2refresh:true,//在填错验证码后是否刷新验证码
	        validateEven : "blur",//触发验证的方法名，如click，blur等
	        validateFn : function(result,code){//验证回调函数
	            // 验证码正确
	            if(result){
	                $(".img-verify").append($div).children("div").text("√").addClass("right");
	            }else{
	            	// 验证码不正确！
	                if(this.opt.question){
	                	loginRegTip(loginRegisterTip.imgVerify_wrong);
	                     //$(".reg-tip span").text('验证失败:'+code.answer);
	                }else{
	                	loginRegTip(loginRegisterTip.imgVerify_wrong);
	                     //$(".reg-tip span").text('验证失败:'+code.strCode);
	                }
	            }
	        }
	    });

	    // ***************关闭提示信息***************
	    $("#close_regtip").on("click",function(event){
	    	event.stopPropagation();
	    	$(".mask2").hide();
	    	$(".reg-tip-box").slideUp(500);
	    });

	    // ***************手机号码表单验证***************
		// 创建元素
	    var $reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
	    $("#user_phone").on("blur",function(){
	    	var $user_phone = $(this).val();
	    	var $result = $reg.test($user_phone);
	    	// 手机号码格式正确
	    	if($result){
	    		$(this).parent().parent()
	    			    .append($div)
	                    .children("div").text("√")
	    	            .addClass("right");
	    	}else{
	    		// 手机号码格式不正确
	    		loginRegTip(loginRegisterTip.userPhone_format);
    		    $(this).parent().parent()
    		    .append($div)
    		    .children("div").text("×")
    		    .addClass("wrong");
    		    setTimeout('$(".input-tip").remove()', 6000);
	    	}

	    });

        //*********************登录判断手机号码格式*********************
        $("#username").on("blur",function(event){
        	var $username = $(this).val();
        	if ( $username != ""){
	        	var $result = $reg.test($username);
	        	if( !$result ){
	        		loginRegTip(loginRegisterTip.userPhone_format);
	    		    event.stopPropagation();
	        	}
        	} else{
        		return false;
        	}
	    });

	    // ***************发送验证码倒计时***************
	    // var btn = document.getElementById("btn");
	    var count = 60;  // 数据的 10
	    var timer = null; // 定时器的名字
	    $(".phone-verify").on("click",function() {
	    	clearInterval(timer);  // 先清除掉原来的定时器
	    	// alert(11);
	    	$(this).disabled = true;
	    	$(this).css({
	    		"background":"rgba(64, 144, 255, 1)",
	    		"color":"#fff"
	    	});
	    	 //alert(this);  // this 指向的是 btn
	    	var $that = $(this);  // 把 btn 对象 给 $that  var _this = this;
	    	timer = setInterval(sendTextMessage,1000);  // 开启定时器 名字  timer
	    	function sendTextMessage() {
	    	    count--;
	    	//this.innerHTML = "还剩余"+count+"秒";
	    	   // alert(this); // this 指向的是 定时器  window
	    	    //alert($that);
	    	    if(count >= 0 )
	    	    {
	    	    	var $phone_verify_text =  "还剩余<em>"+count+"</em>秒";
	    	        $that.html($phone_verify_text);
	    	    }
	    	    else
	    	    {
	    	        $that.text("重发短信");
	    	        $that.disabled = false;
	    	        clearInterval(timer);  // 清除定时器
	    	        count = 60;
	    	    }
	    	}
	    });

	    //***************密码强度校验***************
	    $('#reg_password').keyup(100,function () { 
            var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g"); 
            var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g"); 
            var enoughRegex = new RegExp("(?=.{6,}).*", "g"); 
         
            if (false == enoughRegex.test($(this).val())) {
            	if($(this).val() != ""){
            		// $('.cover').animate({left:"71px"},2000);
            		$('.cover').css('left','71px');
            	}else{
            		$('.cover').css('left','0');
            	}
            	
            	
                //$('#level').removeClass('pw-weak'); 
                //$('#level').removeClass('pw-medium'); 
                //$('#level').removeClass('pw-strong'); 
                //$('#level').addClass(' pw-defule'); 
                 //密码小于六位的时候，密码强度图片都为灰色 
            } 
            else if (strongRegex.test($(this).val())) { 
            	//$('.cover').animate({left:"220px"},2000);
            	$('.cover').css('left','220px');
                //$('#level').removeClass('pw-weak'); 
                //$('#level').removeClass('pw-medium'); 
                //$('#level').removeClass('pw-strong'); 
                //$('#level').addClass(' pw-strong'); 
                 //密码为八位及以上并且字母数字特殊字符三项都包括,强度最强 
            } 
            else if (mediumRegex.test($(this).val())) { 
            	//$('.cover').animate({left:"140px"},2000);            	
            	$('.cover').css('left','140px');
                //$('#level').removeClass('pw-weak'); 
                //$('#level').removeClass('pw-medium'); 
                //$('#level').removeClass('pw-strong'); 
                //$('#level').addClass(' pw-medium'); 
                 //密码为七位及以上并且字母、数字、特殊字符三项中有两项，强度是中等 
            } 
            else { 
            	$('.cover').css('left','71px');
            	//$('.cover').animate({left:"71px"},2000);
                //$('#level').removeClass('pw-weak'); 
                //$('#level').removeClass('pw-medium'); 
                //$('#level').removeClass('pw-strong'); 
                //$('#level').addClass('pw-weak'); 
                 //如果密码为6为及以下，就算字母、数字、特殊字符三项都包括，强度也是弱的 
            } 
            return true; 
        });  

        // ***************用户ajax实现用户登录***************
	    $("#login").on("click",function(){
	    	var $username = $("#username").val();
	    	var $password = $("#password").val();
	    	if( $username != "" && $password != ""){
	    		$.ajax({
	    			type: "POST",
	    			url:"php/userLogin.php",  
	    			dataType:"JSON", 
	    			data:{  
                    "username":$username,  
                    "password":$password
                	},
                	success: function (data) {
                		switch(data){  
                        case 1://普通用户  
                            //$.cookie("user",$username);  
                            //$.cookie("limit",0);  
                            window.location.href="index.php";  
                            break;  
                        case 2://密码错误  
                            loginRegTip(loginRegisterTip.userPassword_wrong);  
                            break;  
                        case 3://用户不存在  
                            loginRegTip(loginRegisterTip.userPhone_wrong);  
                            break;    
                    	}  
                	}
	    		});
	    	} else{
	    		loginRegTip(loginRegisterTip.phoneOrPassowrd_blank);
	    	}
	    });
	    // ***************用户ajax实现用户注册***************
	    $('#register').click(function(){  
	    	// 获取用户手机号码
            var $userphone = $('#user_phone').val();  
            // 获取注册密码
            var $regpassword = $("#reg_password").val();
            // 获取手机验证码  
            var $code = $("#phone_verify").val();  
            // 判断手机号码和密码是否为空，验证码的长度是否为4
            if( $userphone != "" && $regpassword != ""){  
            	if( $code.length == 4 ){
            		$.ajax({  
                    type:"POST",  
                    url:"php/addUser.php",  
                    dataType:"JSON",  
                    data:{  
                        "userphone":$userphone,  
                        "regpassword":$regpassword,
                        "code":$code
                    },  
                    success:function(data){  
                        switch(data){  
                            case 1:
                            //用户已存在  
                                loginRegTip(loginRegisterTip.userPhone_exist);  
                                break;  
                            case 2:
                            //注册成功  
                                alert("注册成功！");  
                                //$.cookie("user",username);  
                                //$.cookie("limit",0);  
                                window.location.href="index.php";  
                                break;  
                            case 0:
                            //验证码错误  
                                loginRegTip(loginRegisterTip.phoneVerify_wrong);
                                break;
                        	}  
                    	}  
                	}) 	
            	}else{
            		loginRegTip(loginRegisterTip.phoneVerify_length);
            	}
            }else{  
                loginRegTip(loginRegisterTip.phoneOrPassowrd_blank);  
            }  
        }); 
});