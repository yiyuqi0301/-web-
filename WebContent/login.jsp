<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="format-detection" content="telephone=no">
        <meta charset="UTF-8">
        <meta name="description" content="Violate Responsive Admin Template">
        <meta name="keywords" content="Super Admin, Admin, Template, Bootstrap">

        <title>学生信息管理系统</title>
            
        <!-- CSS -->
        
        <script type="text/javascript">
        	
        	$(function(){
        		$("#username").blur(function(){
        			if($("#username").val()==""){
        				$("#username_span").html("学号或工号不能为空");
        			}
        			else{
        				var username = $("#username").val();
        				 $.ajax({
            	             //几个参数需要注意一下
            	                 type: "POST",//方法类型
            	                 dataType: "json",//预期服务器返回的数据类型
            	                 url: "UserServlet?method=checkUserUsername" ,//url
            	                 data: {username,username},
            	                 success: function (result) {
            	                	 if(result == 0)
            	                		 $("#username_span").html("用户不存在");
            	                 }
            	             });
        				
        			}
        			
        		})
        	});
        	function clearLoginMsg(){
        		var login_span_ele = document.getElementById("login_span");
        		login_span_ele.innerHTML = "";
        		$("#username_span").html("");
        	}
        </script>
        <%@ include file="/WEB-INF/include/base.jsp" %>
        <style type="text/css">
        	.body-center{
		    	display:flex;
		    	justify-content:center;
		    	}
        </style>
    </head>
    <body id="skin-blur-violate" class="body-center">
        <div id="login">
		    <div class="row body-center">
		    	<div class="col-md-12">
		    	<div>
		    		<header>
                		<h1>学生信息管理系统</h1>
            		</header>
		    	</div>
		    
            
            
            <div>
            <!-- Login -->
		            <form class="box tile animated active " id="box-login" action="userServlet?method=login" method="post">
		                <h2 class="m-t-0 m-b-15">欢迎登录</h2>
		                <input type="text" id="username" class="login-control m-b-10" placeholder="学号或工号" name="username" onfocus="clearLoginMsg();">
		                <span id="username_span"><font color="red"></font></span>
		                <input type="password" class="login-control" placeholder="密码" name="password" onfocus="clearLoginMsg();">
		                <div class="checkbox">
		                    <label>
		                        <input type="checkbox">
		                                            记住密码
		                    </label>
		                   <span id="login_span"><font color="red">${requestScope.login_msg}</font></span>  <!-- EL表达式 {$} pageScope\requestScope\sessionScope\applicationScope-->
		                </div>
		                <input class="btn btn-sm m-r-5" type="submit" value="登录"/>
		                
		                <small>
		                    <!-- <a class="btn btn-sm m-r-5" href="regist.jsp">还没有账号?</a>  -->
		                    or
		                    <a class="btn btn-sm m-r-5" href="findpassword.jsp">忘记密码?</a>
		                </small>
		            </form>
            </div>
             
            </div>
            
		    </div>
 

        </div>                      
        
        <!-- Javascript Libraries -->
        <!-- jQuery -->
        <script src="js/jquery.min.js"></script> <!-- jQuery Library -->
        
        <!-- Bootstrap -->
        <script src="js/bootstrap.min.js"></script>
        
        <!--  Form Related -->
        <script src="js/icheck.js"></script> <!-- Custom Checkbox + Radio -->
        
        <!-- All JS functions -->
        <script src="js/functions.js"></script>
    </body>
</html>