<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="format-detection" content="telephone=no">
        <meta charset="UTF-8">

        <meta name="description" content="Violate Responsive Admin Template">
        <meta name="keywords" content="Super Admin, Admin, Template, Bootstrap">
        <style type="text/css">
        	.body-center{
		    	display:flex;
		    	justify-content:center;
		    	}
        </style>
        <script src="js/jquery.min.js"></script> <!-- jQuery Library -->
        <script type="text/javascript" src="js/regist.js"></script>
        <%@ include file="/WEB-INF/include/base.jsp" %>
        <title>学生信息管理系统</title>

    </head>
    <body id="skin-blur-violate"  class="body-center">
        <div id="login">
	        <div class="row body-center">
	        	<div class="col-md-12">
				    <div>
				    	 <header>
		                 <h1>学生信息管理系统</h1>
		                 </header>
				    </div>
				    <div>
		 		    <form class="box tile animated active" id="box-register" action="userServlet?method=regist" method="post">
		                <h2 class="m-t-0 m-b-15">注册</h2>
		                <input type="text" class="login-control m-b-10" placeholder="用户名" name="username" id="username" onfocus="clearRegistMsg();"> 
		                <span id="username_span"></span>
		                <input type="email" class="login-control m-b-10" placeholder="邮箱" name="email"  id="email" onfocus="clearRegistMsg();"> 
		                <span id="email_span"></span>
		                <input type="password" class="login-control m-b-10" placeholder="密码" name="password" id="password" onfocus="clearRegistMsg();" >
		                <input type="password" class="login-control m-b-20" placeholder="确认密码" id="repassword" onfocus="clearRegistMsg();"><span id="pass_span"></span>
		                <input class="btn btn-sm m-r-5" type="submit" value="注册"/>
		
		                <small><a class="btn btn-sm m-r-5" href="login.jsp">已有帐号?</a></small>
		            </form>
				    </div>
			    </div>
			</div>

        </div>                      
        
        <!-- Javascript Libraries -->
        <!-- jQuery -->
        

        
        <!-- Bootstrap -->
        <script src="js/bootstrap.min.js"></script>
        
        <!--  Form Related -->
        <script src="js/icheck.js"></script> <!-- Custom Checkbox + Radio -->
        
        <!-- All JS functions -->
        <script src="js/functions.js"></script>
    </body>
</html>