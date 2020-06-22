     var table_name = "nothing";
      	$(function(){
      		
      			
      	//初始使表格隐藏
      		$("#stu").addClass("hidden");
      		$("#course").addClass("hidden");
      		$("#score").addClass("hidden");
      	//首先禁用操作组
      		$("#btn-group button").addClass('disabled');
      		$("#query").addClass('disabled');
      		
      		
      	//使用哪个显示哪个表
      		$("#stu_block").on("click",function(){
      			$('.fixed-table-toolbar').hide();
  				$(".fixed-table-pagination").hide();
      			$("#stu").removeClass("hidden");
      			$("#course").addClass("hidden");
          		$("#score").addClass("hidden");
          		$("#query").removeClass('disabled');
          		table_name="stu";
      		});
      		$("#course_block").on("click",function(){
      			$('.fixed-table-toolbar').hide();
  				$(".fixed-table-pagination").hide();
      			$("#stu").addClass("hidden");
      			$("#course").removeClass("hidden");
          		$("#score").addClass("hidden");
          		$("#query").removeClass('disabled');
          		table_name="course";
      		});
      		$("#score_block").on("click",function(){
      			$('.fixed-table-toolbar').hide();
  				$(".fixed-table-pagination").hide();
      			$("#stu").addClass("hidden");
      			$("#course").addClass("hidden");
          		$("#score").removeClass("hidden");
          		$("#query").removeClass('disabled');
          		table_name="score";
      		});
      		
      		
      		
      		
/////////////////////////////////////////////////////////////////////////
      		
      		$("#query").click(function(){  //分模块调用查询功能
      			//$("#stu").addClass("hidden");
      			//alert("查询学生信息");
      			switch(table_name){
      			case "stu":
      				query_stu();
      				break;
      			case "course":
      				query_course();
      				break;
      			case "score":
      				query_score();
      				break;
      			}

      		});
      		
      		if(level == 0){
      			$("#btn-group button").addClass('disabled');
      		}else{
      		
      		
      		$("#add").click(function(){
      			switch(table_name){
      			case "stu":
      				$('#form_stu *').removeAttr('readonly',true);
      				$("#modal_stu").modal("show");
      				query_college();
      				break;
      			case "course":
      				$('#form_course *').removeAttr('readonly',true);
      				$("#modal_course").modal("show");
      				query_college_course();
      				break;
      			case "score":
      				query_course_score();
      				$("#form_sscore #sscore_id").val(score_id);
          			$("#form_sscore #sscore_name").val(score_name);
          			$("#form_sscore #sscore_score").val(score_score);
          			//$("#form_sscore #sscore_coursename").val(score_coursename);
          			sscore_college ='<option value='+score_college+'>'+score_college+'</option>';
          			$('#sscore_collegeinput').html(sscore_college);
          			sscore_subject ='<option value='+score_subject+'>'+score_subject+'</option>';
          			$('#sscore_subjectinput').html(sscore_subject);
          			sscore_class ='<option value='+score_class+'>'+score_class+'</option>';
          			$('#sscore_classinput').html(sscore_class);
          			$("#sscore_submit").attr("onclick","add_sscoreinfo()");
          			$('#form_sscore #sscore_id').attr('readonly',true);
          			$('#form_sscore #sscore_name').attr('readonly',true);
          			$('#form_sscore #sscore_collegeinput').attr('readonly',true);
          			$('#form_sscore #sscore_subjectinput').attr('readonly',true);
          			$('#form_sscore #sscore_input').attr('readonly',true);
      				//$("#modal_sscore").modal("show");
      				$("#modal_sscore").modal("show");
      				
      				break;
      				}
    		});
      		
      		
      		
      		//编辑操作
      		$("#edit").click(function(){
      			
      			switch(table_name){
      			case "stu":
          			$("#form_stu #idinput").val(stu_id);
          			$("#form_stu #nameinput").val(stu_name);
          			$("#form_stu #emailinput").val(stu_email);
          			$('#form_stu *').removeAttr('readonly',true);
          			$('#title_stu').html("修改信息")
          			$("#stu_submit").attr("onclick","edit_stuinfo()");
          			$("#modal_stu").modal("show");
      				query_college();
      				break;
      			
      			case "score":
      				$("#form_score #score_id").val(score_id);
          			$("#form_score #score_name").val(score_name);
          			$("#form_score #score_coursename").val(score_coursename);
          			$("#form_score #score_score").val(score_score);
          			$("#form_score #score_courseid").val(score_courseid);
          			score_college ='<option value='+score_college+'>'+score_college+'</option>';
          			$('#score_collegeinput').html(score_college);
          			score_subject ='<option value='+score_subject+'>'+score_subject+'</option>';
          			$('#score_subjectinput').html(score_subject);
          			score_class ='<option value='+score_class+'>'+score_class+'</option>';
          			$('#score_classinput').html(score_class);
          			$("#score_submit").attr("onclick","edit_scoreinfo()");
          			$('#form_score *').attr('readonly',true);
          			$('#form_score #score_score').attr('readonly',false);
      				$("#modal_score").modal("show");
      				//query_college();
      				break;
      			}

      		});
      		
      		
      		$("#delete").click(function(){
      			
      			switch(table_name){
      			case "stu":
      				$("#form_stu #idinput").val(stu_id);
          			$("#form_stu #nameinput").val(stu_name);
          			$("#form_stu #emailinput").val(stu_email);
           			stu_college_op ='<option value='+stu_college+'>'+stu_college+'</option>';
          			$('#collegeinput').html(stu_college_op);
          			stu_subject_op ='<option value='+stu_subject+'>'+stu_subject+'</option>';
          			$('#subjectinput').html(stu_subject_op);
          			stu_class_op ='<option value='+stu_class+'>'+stu_class+'</option>';
          			$('#classinput').html(stu_class_op);
          			stu_sex_op ='<option value='+stu_sex+'>'+stu_sex+'</option>';
          			$('#sexid').html(stu_sex_op);
          			$('#form_stu *').attr('readonly',true);
          			$('#title_stu').html("删除")
          			$("#stu_submit").attr("onclick","del_stuinfo()");
          			$("#modal_stu").modal("show");
      				query_college();
      				break;
      			case "course":
      				$("#form_course #numinput").val(course_id);
          			$("#form_course #tea_idinput").val(tea_id);
          			$("#form_course #nameinput").val(tea_name);
          			$("#form_course #course_nameinput").val(course_name);
          			course_college_op ='<option value='+course_college+'>'+course_college+'</option>';
          			$('#college_courseinput').html(course_college_op);
          			course_subject_op ='<option value='+course_subject+'>'+course_subject+'</option>';
          			$('#subject_courseinput').html(course_subject_op);
          			$('#form_course *').attr('readonly',true);
          			$('#title_course').html("删除")
          			$("#course_submit").attr("onclick","del_courseinfo()");
      				$("#modal_course").modal("show");

      				//query_college_course();
      				break;
      			case "score":
      				$("#form_score #score_id").val(score_id);
          			$("#form_score #score_name").val(score_name);
          			$("#form_score #score_coursename").val(score_coursename);
          			$("#form_score #score_score").val(score_score);
          			$("#form_score #score_courseid").val(score_courseid);
          			score_college ='<option value='+score_college+'>'+score_college+'</option>';
          			$('#score_collegeinput').html(score_college);
          			score_subject ='<option value='+score_subject+'>'+score_subject+'</option>';
          			$('#score_subjectinput').html(score_subject);
          			score_class ='<option value='+score_class+'>'+score_class+'</option>';
          			$('#score_classinput').html(score_class);
          			$("#score_submit").attr("onclick","del_scoreinfo()");
          			$('#form_score *').attr('readonly',true);
      				$("#modal_score").modal("show");
      				//query_college();
      				break;
      			}
      			
      			

      		});
      		}
      		
      	});
      	
 ///////////////////////////////////////////////////////////////////////     	
        function del_stuinfo(){
      
       	 var form_data = $("#form_stu").serialize();
       	 $.ajax({
                //几个参数需要注意一下
                    type: "POST",//方法类型
                    dataType: "json",//预期服务器返回的数据类型
                    url: "StuInfoManager?method=delStuInfo" ,//url
                    data: form_data,
                    success: function (result) {
                   	 alert(result.result);
                    }
                });
       	 query_stu();
       	 
        }
     function edit_stuinfo(){

    	 var form_data = $("#form_stu").serialize();
    	 $.ajax({
             //几个参数需要注意一下
                 type: "POST",//方法类型
                 dataType: "json",//预期服务器返回的数据类型
                 url: "StuInfoManager?method=editStuInfo" ,//url
                 data: form_data,
                 success: function (result) {
                	 alert(result.result);
                 }
             });
    	 query_stu();
    	 
     }
     function add_stuinfo(){ //添加学生信息
    	
    	 var form_data = $("#form_stu").serialize();
    	 $.ajax({
             //几个参数需要注意一下
                 type: "POST",//方法类型
                 dataType: "json",//预期服务器返回的数据类型
                 url: "StuInfoManager?method=addStuInfo" ,//url
                 data: form_data,
                 success: function (result) {
                	 alert(result.result);
                 }
             });
        
     };
     
     function add_courseinfo(){ //添加课程信息
    	
    	 var form_data = $("#form_course").serialize();
    	 $.ajax({
             //几个参数需要注意一下
                 type: "POST",//方法类型
                 dataType: "json",//预期服务器返回的数据类型
                 url: "CourseInfoManager?method=addCourseInfo" ,//url
                 data: form_data,
                 success: function (result) {
                	 alert(result.result);
                 }
             });

     };
     
     function add_sscoreinfo(){ //添加成绩信息
 
    	 var form_data = $("#form_sscore").serialize();
    	 $.ajax({
             //几个参数需要注意一下
                 type: "POST",//方法类型
                 dataType: "json",//预期服务器返回的数据类型
                 url: "ScoreInfoManager?method=addScoreInfo" ,//url
                 data: form_data,
                 success: function (result) {
                	 alert(result.result);
                 }
             });

     };
     
     function del_courseinfo(){
       	 
       	 var form_data = $("#form_course").serialize();
       	 $.ajax({
                //几个参数需要注意一下
                    type: "POST",//方法类型
                    dataType: "json",//预期服务器返回的数据类型
                    url: "CourseInfoManager?method=delCourseInfo" ,//url
                    data: form_data,
                    success: function (result) {
                   	 alert(result.result);
                    }
                });
       	 query_course();
       	 
        }
     
     function edit_scoreinfo(){
    	
    	 var form_data = $("#form_score").serialize();
    	 $.ajax({
             //几个参数需要注意一下
                 type: "POST",//方法类型
                 dataType: "json",//预期服务器返回的数据类型
                 url: "ScoreInfoManager?method=editScoreInfo" ,//url
                 data: form_data,
                 success: function (result) {
                	 alert(result.result);
                 }
             });
    	 query_score();
    	 
     }
     
     function del_scoreinfo(){
       	 
       	 var form_data = $("#form_score").serialize();
       	 $.ajax({
                //几个参数需要注意一下
                    type: "POST",//方法类型
                    dataType: "json",//预期服务器返回的数据类型
                    url: "ScoreInfoManager?method=delScoreInfo" ,//url
                    data: form_data,
                    success: function (result) {
                   	 alert(result.result);
                    }
                });
       	 query_score();
       	 
        }
 /////////////////////////////////////////////////////////////////////    
     $('#modal_stu').on('hidden.bs.modal', function (){  //模态框隐藏时清空表单
    		document.getElementById("form_stu").reset();
    	});
     $('#modal_course').on('hidden.bs.modal', function (){  //模态框隐藏时清空表单
 		document.getElementById("form_course").reset();
 	});
     $('#modal_score').on('hidden.bs.modal', function (){  //模态框隐藏时清空表单
 		document.getElementById("form_score").reset();
 	});
     
     

  		
  		
//  		//选中行高亮
//  		$("#stu_info").on("click","tr",function(event){
//  			//$(this).css("background","red");
//  			stu_id = $(this).children('td').eq(1).html();
//  			stu_name = $(this).children('td').eq(2).html();
//  			stu_college = $(this).children('td').eq(3).html();
//  			stu_subject = $(this).children('td').eq(4).html();
//  			stu_class = $(this).children('td').eq(5).html();
//  			stu_email = $(this).children('td').eq(6).html();
//  			stu_sex = $(this).children('td').eq(7).html();
//  			//alert(stu_email); 
//  			$(this).css("background","#4499d2").siblings().css("background","").end();
//  			$("#btn-group button").removeClass('disabled');
//  		});
//  		
//  		$("#course_info").on("click","tr",function(event){
//  			course_id = $(this).children('td').eq(0).html();
//  			course_name = $(this).children('td').eq(1).html();
//  			tea_name = $(this).children('td').eq(2).html();
//  			tea_id = $(this).children('td').eq(3).html();
//  			course_college = $(this).children('td').eq(4).html();
//  			course_subject = $(this).children('td').eq(5).html();
//  			
//  			//$(this).css("background","red");
//  			/* id = $(this).children('td').eq(0).html();
//  			alert(id); */
//  			$(this).css("background","#4499d2").siblings().css("background","").end();
//  			$("#btn-group button").removeClass('disabled');
//  		});
//  		
//  		
//  		$("#score_info").on("click","tr",function(event){
//  			
//  			score_id = $(this).children('td').eq(0).html();
//  			score_name = $(this).children('td').eq(1).html();
//  			score_coursename = $(this).children('td').eq(2).html();
//  			score_courseid = $(this).children('td').eq(3).html();
//  			score_score = $(this).children('td').eq(4).html();
//  			score_college = $(this).children('td').eq(7).html();
//  			score_subject = $(this).children('td').eq(6).html();
//  			score_class = $(this).children('td').eq(5).html();
//  			//$(this).css("background","red");
//  			/* id = $(this).children('td').eq(0).html();
//  			alert(id); */
//  			$(this).css("background","#4499d2").siblings().css("background","").end();
//  			$("#btn-group button").removeClass('disabled');
//  		});
  		
  /////////////////////////////////////////////////////////////////		
			function query_stu(){  //查询学生信息
				$('#stu').bootstrapTable('destroy');
				$(".fixed-table-pagination").hide();
				$('#stu').bootstrapTable({
				    url: 'StuInfoManager?method=getStuInfo',// 表格数据来源
				    striped: true,
				    pagination:true,
				    pageSize: 5,//初始页记录数
				    sortable: true,    //排序
				    pageList: [10,20], //记录数可选列表
				    search: true,
				    onClickRow:function (row,$element) {
				    	//alert("click:" + row.username);
				    	//$(this).css("background","red");
			  			stu_id = row.username;
			  			stu_name = row.name;
			  			stu_college = row.college;
			  			stu_subject = row.subject;
			  			stu_class = row.classid;
			  			stu_email = row.email;
			  			stu_sex = row.sex;
			  			//alert(stu_email); 
			  			 $('.changeColor').removeClass('changeColor');//移除class
		                 $($element).addClass('changeColor');//添加class
			  			$("#btn-group button").removeClass('disabled');
	                },

				    columns: [{
				        title: '序号',
				        align: 'center',
				        halign: 'center',
				        strictSearch: true,
				        showRefresh:true,
				        searchAlign:"right",
				        showToggle:true,
				        formatter: function (value, row, index) {
				          return index + 1;
				        }
				      }, {
				        field: 'username',
				        title: '学号',
				        sortable:true,
				        align: 'center'
				    }, {
				        field: 'name',
				        title: '姓名',
				        align: 'center'
				    },
				    {
				        field: 'college',
				        title: '学院',
				        align: 'center'
				    },
				    {
				        field: 'subject',
				        title: '专业',
				        align: 'center'
				    },
				    {
				        field: 'classid',
				        title: '班级',
				        align: 'center'
				    },{
				        field: 'email',
				        title: '邮箱',
				        align: 'center'
				    },{
				        field: 'sex',
				        title: '性别',
				        align: 'center'
				    }]
				});
//				$.ajax({
//			        type : "post",
//			        async : false,
//			        url : "StuInfoManager?method=getStuInfo",
//			        data : {},
//			        dataType : "json", 
//			        success : function(result) {
//			        	var html = "";
//	      				for ( var i = 0; i < result.length; i++) {//循环json对象，拼接tr,td的html
//	       					html = html + '<tr>';
//	       					html = html + '<td>' + result[i].username + '</td>';
//	       					html = html + '<td>' + result[i].name +'</td>';;
//	       					html = html + '<td>' + result[i].college +'</td>';
//	       					html = html + '<td>' + result[i].subject +'</td>';
//	       					html = html + '<td>' + result[i].classid + '</td>';
//       						html = html + '<td>' + result[i].email +'</td>';
//       						html = html + '<td>' + result[i].sex +'</td>';
//       						html = html + '</tr>';
//	       				}
//	      			$('#stu_info').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中
//			        }
//				});
			}

			function query_course(){//查询课程信息
				$(".fixed-table-pagination").hide();
				$('#course').bootstrapTable('destroy');
				$(".fixed-table-pagination").hide();
				$('#course').bootstrapTable({
				    url: 'CourseInfoManager?method=getCourseInfo',// 表格数据来源
				    striped: true,
				    pagination:true,
				    pageSize: 5,//初始页记录数
				    sortable: true,    //排序
				    pageList: [10,"All"], //记录数可选列表
				    search: true,
				    onClickRow: function (row,$element) {
				    	course_id = row.course_id;
			  			course_name = row.course_name;
			  			tea_name = row.tea_name;
			  			tea_id = row.tea_username;
			  			course_college = row.college;
			  			course_subject = row.subject;
			  			$('.changeColor').removeClass('changeColor');//移除class
		                 $($element).addClass('changeColor');//添加class
			  			$("#btn-group button").removeClass('disabled');
		            },
				    columns: [{
				        title: '序号',
				        align: 'center',
				        halign: 'center',
				        strictSearch: true,
				        showRefresh:true,
				        searchAlign:"right",
				        showToggle:true,
				        formatter: function (value, row, index) {
				          return index + 1;
				        }
				      }, {
				        field: 'course_id',
				        title: '课程编号',
				        sortable:true,
				        align: 'center'
				    }, {
				        field: 'course_name',
				        title: '课程名称',
				        align: 'center'
				    },
				    {
				        field: 'tea_username',
				        title: '授课教师工号',
				        align: 'center'
				    },
				    {
				        field: 'tea_name',
				        title: '授课教师姓名',
				        align: 'center'
				    },
				    {
				        field: 'subject',
				        title: '专业',
				        align: 'center'
				    },{
				        field: 'college',
				        title: '学院',
				        align: 'center'
				    }]
				});
//				
			}
			
			function query_score(){ //查询成绩信息
				$(".fixed-table-pagination").hide();
				$('#score').bootstrapTable('destroy');
				$(".fixed-table-pagination").hide();
				$('#score').bootstrapTable({
				    url: 'ScoreInfoManager?method=getScoreInfo',// 表格数据来源
				    striped: true,
				    pagination:true,
				    pageSize: 5,//初始页记录数
				    sortable: true,    //排序
				    pageList: [10,"All"], //记录数可选列表
				    search: true,
				    onClickRow: function (row,$element) {
				    	score_id = row.stu_username;
			  			score_name = row.name;
			  			score_coursename = row.course_name;
			  			score_courseid = row.course_id;
			  			score_score = row.score;
			  			score_college = row.college;
			  			score_subject = row.subject;
			  			score_class = row.classid;
			  			$('.changeColor').removeClass('changeColor');//移除class
		                 $($element).addClass('changeColor');//添加class
			  			$("#btn-group button").removeClass('disabled');
		            },
				    columns: [{
				        title: '序号',
				        align: 'center',
				        halign: 'center',
				        strictSearch: true,
				        showRefresh:true,
				        searchAlign:"right",
				        showToggle:true,
				        formatter: function (value, row, index) {
				          return index + 1;
				        }
				      }, {
				        field: 'stu_username',
				        title: '学号',
				        sortable:true,
				        align: 'center'
				    }, {
				        field: 'name',
				        title: '姓名',
				        align: 'center'
				    },
				    {
				        field: 'course_name',
				        title: '课程名称',
				        align: 'center'
				    },
				    {
				        field: 'course_id',
				        title: '课程编号',
				        align: 'center'
				    },
				    {
				        field: 'score',
				        title: '分数',
				        sortable: true,
				        align: 'center'
				    },{
				        field: 'classid',
				        title: '班级',
				        align: 'center'
				    },{
				        field: 'subject',
				        title: '专业',
				        align: 'center'
				    },{
				        field: 'college',
				        title: '学院',
				        align: 'center'
				    }]
				});
//  				$.ajax({
//  			        type : "post",
//  			        async : false,
//  			        url : "ScoreInfoManager?method=getScoreInfo",
//  			        data : {},
//  			        dataType : "json", 
//  			        success : function(result) {
//  			        	var html = "";
//  	      				for ( var i = 0; i < result.length; i++) {//循环json对象，拼接tr,td的html
//  	       					html = html + '<tr>';
//  	       					html = html + '<td>' + result[i].stu_username + '</td>';
//  	       					html = html + '<td>' + result[i].name +'</td>';
//  	       					html = html + '<td>' + result[i].course_name +'</td>';
//  	       					html = html + '<td>' + result[i].course_id +'</td>';
//  	       					html = html + '<td>' + result[i].score +'</td>';
//  	       				    html = html + '<td>' + result[i].classid+'</td>';
//  	       					html = html + '<td>' + result[i].subject+'</td>';
//  	       					html = html + '<td>' + result[i].college + '</td>';
//  	       					html = html + '</tr>';
//  	       				}
//  	      			$('#score_info').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中
//  			        }
//  				});
			}
  		
  	//////////////////////////////////////////////////////////////	
  		
			
			
			
			function query_course_score(){
				$.ajax({
			        type : "post",
			        async : false,
			        url : "StuInfoManager?method=getCourseInfo",
			        data : {},
			        dataType : "json", 
			        success : function(result) {
			        	var html = "";
	      				for ( var i = 0; i < result.length; i++) {//循环json对象，拼接tr,td的html
	       					html = html + '<option value='+result[i]+'>';
	       					html = html + result[i];
	       					html = html + '</option>';
	       				}
	      			$('#sscore_coursename').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中
			        }
				});
		}
			
			
			
			
			
			
			
			
			
			
			
			

  	/////////////////////////////////////////////////////////////////	

  		
  		function query_college_course(){
			$.ajax({
		        type : "post",
		        async : false,
		        url : "StuInfoManager?method=getCollegeInfo",
		        data : {},
		        dataType : "json", 
		        success : function(result) {
		        	var html = "";
      				for ( var i = 0; i < result.length; i++) {//循环json对象，拼接tr,td的html
       					html = html + '<option value='+result[i]+'>';
       					html = html + result[i];
       					html = html + '</option>';
       				}
      			$('#college_courseinput').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中
		        }
			});
	}
  		
  		$("#college_courseinput").change(function(){
			var college = $("#college_courseinput").val();
			query_subject();
			function query_subject(){
  				$.ajax({
  			        type : "post",
  			        async : false,
  			        url : "StuInfoManager?method=getSubjectInfo",
  			        data : {college,college},
  			        dataType : "json", 
  			        success : function(result) {
  			        	var html = "";
  	      				for ( var i = 0; i < result.length; i++) {//循环json对象，拼接tr,td的html
  	       					html = html + '<option value='+result[i]+'>';
  	       					html = html + result[i];
  	       					html = html + '</option>';
  	       				}
  	      			$('#subject_courseinput').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中
  			        }
  				});
			}
		});
		
		
		
 /////////////////////////////////////////////////////////////////////// 		
		function query_college(){
			$.ajax({
		        type : "post",
		        async : false,
		        url : "StuInfoManager?method=getCollegeInfo",
		        data : {},
		        dataType : "json", 
		        success : function(result) {
		        	var html = "";
      				for ( var i = 0; i < result.length; i++) {//循环json对象，拼接tr,td的html
       					html = html + '<option value='+result[i]+'>';
       					html = html + result[i];
       					html = html + '</option>';
       				}
      			$('#collegeinput').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中
		        }
			});
	}
		
		$("#collegeinput").change(function(){
			var college = $("#collegeinput").val();
			query_subject();
			function query_subject(){
  				$.ajax({
  			        type : "post",
  			        async : false,
  			        url : "StuInfoManager?method=getSubjectInfo",
  			        data : {college,college},
  			        dataType : "json", 
  			        success : function(result) {
  			        	var html = "";
  	      				for ( var i = 0; i < result.length; i++) {//循环json对象，拼接tr,td的html
  	       					html = html + '<option value='+result[i]+'>';
  	       					html = html + result[i];
  	       					html = html + '</option>';
  	       				}
  	      			$('#subjectinput').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中
  			        }
  				});
			}
		});
		
		
		$("#subjectinput").change(function(){
			var subject = $("#subjectinput").val();
			query_class();
			function query_class(){
  				$.ajax({
  			        type : "post",
  			        async : false,
  			        url : "StuInfoManager?method=getClassInfo",
  			        data : {subject,subject},
  			        dataType : "json", 
  			        success : function(result) {
  			        	var html = "";
  	      				for ( var i = 0; i < result.length; i++) {//循环json对象，拼接tr,td的html
  	       					html = html + '<option value='+result[i]+'>';
  	       					html = html + result[i];
  	       					html = html + '</option>';
  	       				}
  	      			$('#classinput').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中
  			        }
  				});
			}
		});
		
		
		
		