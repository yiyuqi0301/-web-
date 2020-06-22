var emailFlag = true;
var reg=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/gi;
$(function(){
	
	$("#email").blur(function(){
		var email = $("#email").val();
		if(email=="")
		{
			$("#email_span").html("邮箱地址不能为空");
			emailFlag = false ;
			return falsle;
		}
		else if(!reg.test(email))
		    {
		    	$("#email_span").html("邮箱地址格式不正确");
		    	emailFlag = false ;
		    	return false;
		    }
		else {
			
			$.ajax({
				url:"UserServlet?method=checkUserEmail",
	            type:"post",
	            data:{email:email},
	            success:function(data){	            	
	            if(data == 0){
	            		$("#email_span").html("该邮箱未被注册");
	            		emailFlag = false ;
	            	}else{
	            		$("#email_span").html("");
	            		emailFlag =true;
	            		}
	            	}
	            });
	
		}
		
	});
	
	
	
	
	$("#box-reset").submit(function(){
		return emailFlag;
		});
	
	
})