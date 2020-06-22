$(function(){
	var  usernameFlag = false ; 
	var  emailFlag    = false ;
	var  passwordFlag = false ;
	
	
	$("#username").blur(function(){
		var username = $("#username").val();
		$.ajax({
			url:"UserServlet?method=checkUserUsername",
            type:"post",
            data:{username:username},
            success:function(data){
            	if(data == 0){
            		$("#username_span").html("");
            		usernameFlag =true;
            	}else{
            		$("#username_span").html("用户名已被占用，请更换用户名或找回密码");
            		}
            	}
            });
		});
	
	
	
	$("#email").blur(function(){
		var email = $("#email").val();
		

		
		
		
		$.ajax({
			url:"UserServlet?method=checkUserEmail",
            type:"post",
            data:{email:email},
            success:function(data){
            	if(data == 0){
            		//$("#email_span").html("邮箱可使用");
            		emailFlag =true;
            	}else{
            		$("#email_span").html("邮箱已被使用，请更换邮箱或找回密码");
            		}
        		if(email=="")
        		{
        			$("#email_span").html("邮箱地址不能为空");
        			emailFlag = false ;
        			return false;
        			
        		}
        		else
        		{
        		    reg=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi;
        		    if(!reg.test(email))
        		    {
        		    	$("#email_span").html("邮箱地址格式不正确");
        		    	emailFlag = false ;
        		    	return false;
        		    }
        		}
            	}
            });
		
		

		});
	
	
            	
	$("#repassword").blur(function(){
		var password = $("#password").val();
		var repassword = $("#repassword").val();
		if(password !=null && password !="" && password == repassword){
			$("#pass_span").html("密码一致");
			passwordFlag = true ;
			}else{
				$("#pass_span").html("密码不一致");
				}
		});
            	
	$("form").submit(function(){
		return usernameFlag && passwordFlag && emailFlag;
		});
}); 


function clearRegistMsg(){ 
        		$("#regist_span").html("")
        	}
//function getXhr(){
//        		var xhr = new XMLHttpRequest();
//        		return xhr;
//        		}
//function checkUserEmail(){
//	var email = document.getElementById("email").value;
//	var xhr = getXhr();
//	xhr.open("get","checkUserEmail?email="+email,true);
//	xhr.send();
//	xhr.onreadystatechange=function(){
//		if(xhr.readyState == 4){
//			if(xhr.status == 200){
//				var msg = xhr.responseText;
//				document.getElementById("regist_span").innerHTML=msg;
//			}
//			}
//		}
//	}                        
            
        	