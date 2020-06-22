<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<meta charset="UTF-8">
<title>Insert title here</title>

<!-- 新 Bootstrap 核心 CSS 文件 -->
<link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
 
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"></script>
 
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="js/all2.js"></script>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.16.0/dist/bootstrap-table.min.css">

<!-- Latest compiled and minified JavaScript -->
<script src="https://unpkg.com/bootstrap-table@1.16.0/dist/bootstrap-table.min.js"></script>
<!-- Latest compiled and minified Locales -->
<script src="https://unpkg.com/bootstrap-table@1.16.0/dist/locale/bootstrap-table-zh-CN.min.js"></script>
</head>
<body>
<button id="xh" class="btn btn-primary">按照学号查询</button>
<button id="bj" class="btn btn-primary">按照班级查询</button>
<button id="zy" class="btn btn-primary">按照专业查询</button>
<button id="xy" class="btn btn-primary">按照学院查询</button>
<a href="testServlet?method=getalltest">d</a>
<input id="input"/>

<table id="stu" class="table table-hover table-bordered table-striped">
  <caption>学生信息表</caption>
  <thead>
    <tr>
      <th>学号</th>
      <th>姓名</th>
      <th>学院</th>
      <th>专业</th>
      <th>班级</th>
      <th>邮箱</th>
      <th>性别</th>
    </tr>
  </thead>
  <tbody id="stu_info">

  </tbody>
</table>

<table id="course" class="table table-hover table-bordered table-striped">
  <caption>课程信息表</caption>
  <thead>
    <tr>
      <th>编号</th>
      <th>名称</th>
      <th>授课教师</th>
      <th>授课教师编号</th>
      <th>专业</th>
      <th>学院</th>
    </tr>
  </thead>
  <tbody id="course_info">
  
  </tbody>
</table>

<table id="score" class="table table-hover table-bordered table-striped">
  <caption>成绩信息表</caption>
  <thead>
    <tr>
      <th>学号</th>
      <th>姓名</th>
      <th>课程名称</th>
      <th>课程编号</th>
      <th>分数</th>
      <th>班级</th>
      <th>专业</th>
      <th>学院</th>
    </tr>
  </thead>
  <tbody id="score_info">
  
  </tbody>
</table>


<table id="mytable"></table>


<table id="table"></table>


<script>



$('#table').bootstrapTable({
    url: 'testServlet?method=getalltest',// 表格数据来源
    striped: true,
    pagination:true,
    pageSize: 2,//初始页记录数
    sortable: true,    //排序
    pageList: [8,12], //记录数可选列表
    columns: [{
        title: '序号',
        align: 'center',
        halign: 'center',
        strictSearch: true,
        checkbox: true, 
        visible: true ,
        showRefresh:true,
        
        
        formatter: function (value, row, index) {
          return index + 1;
        }
      }, {
        field: 'name',
        title: '姓名',
        sortable:true,
        align: 'center'
    }, {
        field: 'age',
        title: '年龄',
        align: 'center'
    }]
});
       
    </script>
</body>
</html>