<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="format-detection" content="telephone=no">
        <meta charset="UTF-8">

        <meta name="description" content="Violate Responsive Admin Template">
        <meta name="keywords" content="Super Admin, Admin, Template, Bootstrap">
                
        <!-- Javascript Libraries -->
        <!-- jQuery -->
        <script src="js/jquery.min.js"></script> <!-- jQuery Library -->
        <script src="js/findpassword.js"></script> <!-- jQuery Library -->
        
        <!-- Bootstrap -->
        <script src="js/bootstrap.min.js"></script>
        
        <!--  Form Related -->
        <script src="js/icheck.js"></script> <!-- Custom Checkbox + Radio -->
        
        <!-- All JS functions -->
        <script src="js/functions.js"></script>

        <title>学生信息管理系统</title>
            
        <!-- CSS -->
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/form.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">
        <link href="css/animate.css" rel="stylesheet">
        <link href="css/generics.css" rel="stylesheet">  
        
        <script type="text/javascript">
      
        
        	
        </script>
        <style type="text/css">
        	.body-center{
		    	display:flex;
		    	justify-content:center;
		    	}
        </style>
        <%@ include file="WEB-INF/include/base.jsp" %>
    </head>
    <body id="skin-blur-violate" >
        <section id="login" class="body-center">
         <div class="container">
		    <div class="row">
		    <header>
                <h1>学生信息管理系统</h1>
            </header>
		    </div>
		    <div class="row">
		    <div>
		    	<form class="box tile animated active" id="box-reset" method="post" action="userServlet?method=findUser">
                <h2 class="m-t-0 m-b-15">找回密码</h2>
                <p>请输入您的邮箱，然后点击找回密码.</p>
                <input id="email" type="email" name= "email" class="login-control m-b-10" placeholder="邮箱地址"> 
                <span class="login-control m-t-5" id="email_span"></span>                  
                <button display="none" id="findb"  type="submit" class="btn btn-sm m-r-5 m-b-5">找回密码</button>
                <small><a class="btn btn-sm m-r-5 m-b-5" href="login.jsp">已有帐号?</a></small>
                <input id="password"  class="login-control m-t-5" value=${pwd}>    
                </form>
             </div>
             
		    </div>

		 </div>
            
        
            <div class="clearfix"></div>
            
            <!-- Forgot Password -->
            
        </section>                      
        

    </body>
</html>