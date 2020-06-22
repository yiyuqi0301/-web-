var id;
var b_num;
var device_name;
var device_state;
var device_name_sel;
$(function(){
	
	$("#b1").click(function(){
		b_num = 1;
		show_b();
		});
	$("#b2").click(function(){
		b_num = 2;
		show_b();
		});
	$("#b3").click(function(){
		b_num = 3;
		show_b();
		});
	$("#b4").click(function(){
		b_num = 4;
		show_b();
		});
	$("#b5").click(function(){
		b_num = 5;
		show_b();
		});
	$("#b6").click(function(){
		b_num = 6;
		show_b();
		});
	$("#device_inf").on("click","tr",function(event){
		id = $(this).children('td').eq(0).html();
		device_name_sel = $(this).children('td').eq(1).html();
		
	});
	
	$("#del_btn").on("click",function(event){
		if(confirm("确认删除"+device_name_sel+"，id="+id+"?")){
			del_b();
			show_b();
    	}	
			});
	$('#add_btn').click(function(){
		add();
	});
	
	$('#edit_btn').click(function(){
		alert("修改项："+device_name_sel+"，id="+id);
		edit();
	});
	
	})
	



function show_b(){
	$.ajax({
        type : "post",
        async : false,
        url : "Device_2Servlet?method=getAllDevice_2",
        data : {b_num:b_num},
        dataType : "json", 
        success : function(result) {
                	var html = "";
                	switch(b_num)
                	{
	                   case 1:
	             		   device_name="水泵"
	             	       break;
                	   case 2:
                		   device_name="电控柜"
                	       break;
                	   case 3:
                		   device_name="气压罐"
                	       break;
                	   case 4:
                		   device_name="压力表"
                	       break;
                	   case 5:
                		   device_name="安全阀"
                	       break;
                	   case 6:
                		   device_name="压力开关"
                	       break;
                		   }
       				for ( var i = 0; i < result.length; i++) {//循环json对象，拼接tr,td的html
       					if(result[i].state==0)
       						device_state="<font color='green'>正常</font>";
       					else if(result[i].state==1)
       						device_state="<font color='yellow'>维修</font>";
       					else 
       						device_state="<font color='red'>故障</font>";
       					html = html + '<tr>';
       					html = html + '<td>' + result[i].id + '</td>';
       					html = html + '<td>' + result[i].name +"号"+ device_name+ '</td>';
       					html = html + '<td>' + device_state +'</td>';
       					html = html + '</tr>';
       				}
       				$('#device_inf').html(html);//通过jquery方式获取table，并把tr,td的html输出到table中
                   }
        });
}



function del_b(){
	$.ajax({
        type : "post",
        async : false,
        url : "Device_2Servlet?method=deleteDeviceById",
        data : {id:id,b_num:b_num},
        dataType : "json", 
        });
}

var name;
var state;
function add()
{
    name = prompt("设备名称","");//将输入的内容赋给变量 name ，
    state = prompt("设备状态","请输入0、1、2，分别代表正常、故障和维修，其他内容无效");
    if(state<0||state>2||!(/(^[0-9]\d*$)/.test(state))){
    	var state = null;
    	if(confirm("本次操作失败，重新操作？")){
    		add()
    	}
    }else{
    	if(confirm("设备编号："+name+"  设备状态："+state+" 确认提交？"))
    		if(confirm("本次操作成功，是否继续操作？"))
    			add()
    }
    //这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值, 所以我在哪里传了个空
    
    
    $.ajax({
        type : "post",
        async : false,
        url : "Device_2Servlet?method=addDeviceById",
        data : {state:state,b_num:b_num,name:name},
        dataType : "json", 
        });
    
    show_b();
}



function edit()
{
    name = prompt("设备名称","");//将输入的内容赋给变量 name ，
    state = prompt("设备状态","请输入0、1、2，分别代表正常、故障和维修，其他内容无效");
    if(state<0||state>2||!(/(^[0-9]\d*$)/.test(state))){
    	var state = null;
    	if(confirm("本次操作失败，重新操作？")){
    		edit()
    	}
    }else{
    	if(confirm("设备编号："+name+"  设备状态："+state+" 确认提交？"))
    		if(confirm("本次操作成功，是否继续操作？"))
    			edit()
    }
    //这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值, 所以我在哪里传了个空
    
    
    $.ajax({
        type : "post",
        async : false,
        url : "Device_2Servlet?method=editDeviceById",
        data : {state:state,b_num:b_num,name:name,id:id},
        dataType : "json", 
        });
    
    show_b();
}


                		 
