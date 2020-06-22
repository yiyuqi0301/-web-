<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<!--[if IE 9 ]><html class="ie9"><![endif]-->
    <head>
    	
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <meta name="format-detection" content="telephone=no">
        <meta charset="UTF-8">

        <meta name="description" content="Violate Responsive Admin Template">
        <meta name="keywords" content="Super Admin, Admin, Template, Bootstrap">

        <title>学生信息管理系统</title>
            
        <!-- CSS -->

        <link href="css/font-awesome.min.css" rel="stylesheet">
        <link href="css/calendar.css" rel="stylesheet">
        <link href="css/media-player.css" rel="stylesheet">
        <link href="css/icons.css" rel="stylesheet">
        <!--<link rel="stylesheet" href="css/reset.css">-->
        <link rel="stylesheet" href="css/jquery.hotspot.css">
        <%@ include file="/WEB-INF/include/base.jsp" %>
        <script src="js/waterlevel.js"></script>
        <script src="js/water_rate.js"></script>
        <script src="js/water_bump.js"></script>
        <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.16.0/dist/bootstrap-table.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://unpkg.com/bootstrap-table@1.16.0/dist/bootstrap-table.min.js"></script>
<!-- Latest compiled and minified Locales -->
<script src="https://unpkg.com/bootstrap-table@1.16.0/dist/locale/bootstrap-table-zh-CN.min.js"></script>

    </head>
<style type="text/css">

 .changeColor{
            background-color: #31b0d5  !important;
            color: blue;
        }
  .table>tbody>tr>td {                 
  text-align: center;           
   }    
   .table>thead>tr>th {                 
  text-align: center;           
   }                      
	.forminput{
		border-top-right-radius: 5px; 
		border-top-left-radius: 5px; 
		border-bottom-right-radius:5px;
		border-bottom-left-radius:5px;
	}
    .r_out {width:120px; height:120px; border:2px solid #d9d9d9; background:#fff; box-shadow:3px 3px 5px #bfbfbf; -webkit-box-shadow:3px 3px 5px #bfbfbf; -moz-box-shadow:3px 3px 5px #bfbfbf; -ms-box-shadow:3px 3px 5px #bfbfbf; border-radius:50%; -webkit-border-radius:50%; -moz-border-radius:50%; -ms_border-radius:50%; display:inline-block; margin-right:90px; position:relative;}
    .r_out p {position:absolute; /**bottom:-50px;*/ color:#fff; text-align:center; margin:0 auto; width:100%; font-size:14px; line-height:1.5; font-weight:bold;}

    .r_in {width:120px; height:120px; border:10px solid #fff; border-radius:50%; -webkit-border-radius:50%; -moz-border-radius:50%; -ms_border-radius:50%; overflow:hidden; position:relative;}
    .r_c {width:120px; height:120px; position:absolute; bottom:0; left:0; height:0;}
    .c1 {background:#fbad4c;}
    .c2 {background:#fff143;}
    .c3 {background:#c9dd22;}
    .c4 {background:#00e079;}
    .c5 {background:#0eb83a;}
    .r_num {color:#404040; font-size:23px; line-height:1.5; font-weight:bold; position:absolute; top:50%; margin-top:-25px; text-align:center; width:100%;}
</style>
    <body id="skin-blur-blue">
        <header id="header" class="media">
            <a class="logo pull-left" href="index.jsp" style="width: 300px">学生信息管理系统</a>
            
            <div class="media-body">
                <div class="media" id="top-menu">
                    
                    <div id="time" class="pull-left">
                        <span id="hours"></span>
                        :
                        <span id="min"></span>
                        :
                        <span id="sec"></span>
                    </div>
                    
                    
                    

                </div>
                
            </div>
            <div id="logo" class="pull-right">欢迎回来！<span>${sessionScope.user.name}</span><span>${sessionScope.user.username.length()==11?"同学":"老师"}</span></div>
        </header>
        <script type="text/javascript">
        	var level = ${sessionScope.user.level}
        </script>
        <div class="clearfix"></div>
        
        <section id="main" class="p-relative" role="main">
            
            <!-- Sidebar -->
            <aside id="sidebar" style="width: 233px">
                
                <!-- Sidbar Widgets -->
                <div class="side-widgets overflow">
                    <!-- Profile Menu -->
                    <!-- Video -->
                    
                    
                    <!-- Calendar -->
                    <div class="s-widget m-b-25">
                        <div id="sidebar-calendar"></div>
                    </div>
                    
 



                </div>
                
                <!-- Side Menu -->
                <ul class="list-unstyled side-menu">

                   
                   


                </ul>

            </aside>
        
            <!-- Content -->
            <section id="content" class="container" style="margin-left: 233px">
            
                
                

                
                <!-- Breadcrumb -->
                <ol class="breadcrumb hidden-xs">
                    <li class="active">系统总览</li>
                </ol>
                
                <hr class="whiter" />

                <hr class="whiter" />
                
                <!-- Main Widgets -->
               
                <div class="block-area">
                    <div class="row">
                        <div class="col-md-12">

<div class="row">
<button class="btn btn-default" id="stu_block">学生信息</button>   
<button class="btn btn-default" id="course_block">课程信息</button>
<button class="btn btn-default" id="score_block">成绩信息</button>
</div>

                    
                                
<table id="stu" class="table table-hover table-bordered table-striped">
  <caption>学生信息表</caption>
 
  <tbody id="stu_info">

  </tbody>
</table>

<table id="course" class="table table-hover table-bordered table-striped">
  <caption>课程信息表</caption>

  <tbody id="course_info">
  
  </tbody>
</table>

<table id="score" class="table table-hover table-bordered table-striped">
  <caption>成绩信息表</caption>

  <tbody id="score_info">
  
  </tbody>
</table>

<button id="query" type="button" class="btn btn-info">查询</button>
<div id="btn-group" class="btn-group">
   <button id="add" type="button" class="btn btn-success">添加</button>
   <button id="edit"type="button" class="btn btn-warning">修改</button>
   <button id="delete"type="button" class="btn btn-danger">删除</button>
</div>
      
    	
<div class="modal" id="modal_stu">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 id="title_stu" class="modal-title">添加学生信息</h5>
				<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
			</div>
			<div class="modal-body">
				<form id="form_stu"  method="post">
					<div class="form-group">
						<label for="snameinput">姓名</label>
						<input style="background-color:#1c2220" type="text" name="nameinput" id="nameinput" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="idinput">学号</label>
						<input  style="background-color:#1c2220" type="number" name="idinput" id="idinput" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="emailinput">邮箱</label>
						<input style="background-color:#1c2220" type="email" name="emailinput" id="emailinput" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="collegeinput">学院</label>
						<select name="collegeinput" id="collegeinput" class="form-control">

						</select>
					</div>
					
					<div class="form-group">
						<label for="subjectinput">专业</label>
						<select name="subjectinput" id="subjectinput" class="form-control">

						</select>
					</div>
					
					<div class="form-group">
						<label for="classinput">班级</label>
						<select name="classinput" id="classinput" class="form-control">

						</select>
					</div>
					
					<div class="form-group">
						<label for="sexid">性别</label>
						<select name="sexid" id="sexid" class="form-control">
							<option value="男">男	</option>
							<option value="女">女</option>
						</select>
					</div>
					
					<button id="stu_submit" type="button" class="btn btn-primary" onclick="add_stuinfo()">确认</button>
					<button type="button" class="btn btn-default right" data-dismiss="modal">取消</button>
				</form>
			</div>
		</div>
	</div>
</div>          




<div class="modal" id="modal_course">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 id="title_course" class="modal-title">添加课程信息</h5>
				<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
			</div>
			<div class="modal-body">
				<form id="form_course"  method="post">
					<div class="form-group">
						<label for="numinput">课程编号</label>
						<input style="background-color:#1c2220" type="number" name="numinput" id="numinput" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="tea_idinput">教师编号</label>
						<input  style="background-color:#1c2220" type="text" name="tea_idinput" id="tea_idinput" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="nameinput">教师姓名</label>
						<input style="background-color:#1c2220" type="text" name="nameinput" id="nameinput" class="formcontrol col-md-12 forminput">
					</div>
					
					<div class="form-group">
						<label for="course_nameinput">课程名称</label>
						<input style="background-color:#1c2220" type="text" name="course_nameinput" id="course_nameinput" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="college_courseinput">学院</label>
						<select name="college_courseinput" id="college_courseinput" class="form-control">

						</select>
					</div>
					
					<div class="form-group">
						<label for="subject_courseinput">专业</label>
						<select name="subject_courseinput" id="subject_courseinput" class="form-control">

						</select>
					</div>

					
					<button id="course_submit" type="button" class="btn btn-primary" onclick="add_courseinfo()">确认</button>
					<button type="button" class="btn btn-default right" data-dismiss="modal">取消</button>
				</form>
			</div>
		</div>
	</div>
</div>                   
         
      
      
<div class="modal" id="modal_score">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 id="title_score" class="modal-title">添加成绩信息</h5>
				<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
			</div>
			<div class="modal-body">
				<form id="form_score"  method="post">
					<div class="form-group">
						<label for="score_id">学号</label>
						<input style="background-color:#1c2220" type="number" name="score_id" id="score_id" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="score_name">姓名</label>
						<input  style="background-color:#1c2220" type="text" name="score_name" id="score_name" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="score_coursename">课程名称</label>
						<input style="background-color:#1c2220" type="text" name="score_coursename" id="score_coursename" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="score_courseid">课程编号</label>
						<input style="background-color:#1c2220" type="text" name="score_courseid" id="score_courseid" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="score_score">分数</label>
						<input style="background-color:#1c2220" type="number" name="score_score" id="score_score" class="formcontrol col-md-12 forminput">
					</div>
					
					
					<div class="form-group">
						<label for="score_collegeinput">学院</label>
						<select name="score_collegeinput" id="score_collegeinput" class="form-control">

						</select>
					</div>
					
					<div class="form-group">
						<label for="score_subjectinput">专业</label>
						<select name="score_subjectinput" id="score_subjectinput" class="form-control">

						</select>
					</div>
					
					<div class="form-group">
						<label for="score_classinput">班级</label>
						<select name="score_classinput" id="score_classinput" class="form-control">

						</select>
					</div>
					
					
					<button id="score_submit" type="button" data-dismiss="modal" class="btn btn-primary" onclick="add_scoreinfo()">确认</button>
					<button type="button" class="btn btn-default right" data-dismiss="modal">取消</button>
				</form>
			</div>
		</div>
	</div>
</div>   





<div class="modal" id="modal_sscore">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<h5 id="title_sscore" class="modal-title">添加成绩信息</h5>
				<button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
			</div>
			<div class="modal-body">
				<form id="form_sscore"  method="post">
					<div class="form-group">
						<label for="sscore_id">学号</label>
						<input style="background-color:#1c2220" type="number" name="sscore_id" id="sscore_id" class="formcontrol col-md-12 forminput">
					</div>
					<div class="form-group">
						<label for="sscore_name">姓名</label>
						<input  style="background-color:#1c2220" type="text" name="sscore_name" id="sscore_name" class="formcontrol col-md-12 forminput">
					</div>
					
					<div class="form-group">
						<label for="sscore_coursename">课程名称</label>
						<select name="sscore_coursename" id="sscore_coursename" class="form-control">

						</select>
					</div>
					
					
					<div class="form-group">
						<label for="sscore_score">分数</label>
						<input style="background-color:#1c2220" type="number" name="sscore_score" id="sscore_score" class="formcontrol col-md-12 forminput">
					</div>
					
					
					
					<div class="form-group">
						<label for="sscore_collegeinput">学院</label>
						<select name="sscore_collegeinput" id="sscore_collegeinput" class="form-control">

						</select>
					</div>
					
					<div class="form-group">
						<label for="sscore_subjectinput">专业</label>
						<select name="sscore_subjectinput" id="sscore_subjectinput" class="form-control">

						</select>
					</div>
					
					<div class="form-group">
						<label for="sscore_classinput">班级</label>
						<select name="sscore_classinput" id="sscore_classinput" class="form-control">

						</select>
					</div>
					
					
					<button id="sscore_submit" type="button" class="btn btn-primary" onclick="add_sscoreinfo()">确认</button>
					<button type="button" class="btn btn-default right" data-dismiss="modal">取消</button>
				</form>
			</div>
		</div>
	</div>
</div>          
      
      
      <script type="text/javascript" src="js/all.js"></script>
      
      
 
      






                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                
            </section>

        </section>
    </body>
</html>
