var id = [];
var time_s = [];
var score = [];
 
function drewSecurityEcharts(){
	
	//alert("进入方法");
	 y = $("#year").val();
	//alert(y+","+m);
     $.ajax({
        type : "post",
        async : false,
        url : "Evaluate_SecurityServlet?method=getSecurity",
        data : {year:y},
        dataType : "json", 
        success : function(result) {
                   if (result) {
                 	  for (var i = 0; i < result.length; i++) {
							id[i] = result[i].id;
							time_s[i] = result[i].time.substring(0,7);
							score[i] = result[i].score;								
							}
                 	  securityChart.setOption({
                 		  
                   	    toolbox: {
                 	        show: true,
                 	        orient: 'vertical',
                 	        top:30,
    				        right:0,
                 	        show: true,
                 	        feature: {
                 	            dataView: {
                 	                show: true,
                 	                title: '数据视图',
                 	                backgroundColor:'#111820',
                 	                textColor:'fff',                 	                optionToContent: function (opt) {
		                 	            var axisData = opt.xAxis[0].data;
		                 	            var series = opt.series;
		                 	            var tdHeaders = '<td>时间</td>'; //表头
		                 	            series.forEach(function (item) {
		                 	                tdHeaders += '<td>' + item.name + '</td>'; //组装表头
		                 	            });
		                 	            var table = '<div class="table-responsive"><table class="table table-bordered table-striped table-hover" style="text-align:center"><tbody><tr>' + tdHeaders + '</tr>';
		                 	            var tdBodys = ''; //数据
		                 	            for (let i = 0, l = axisData.length; i < l; i++) {
		                 	                for (let j = 0; j < series.length; j++) {
		                 	                    tdBodys += '<td>' + series[j].data[i] + '</td>'; //组装表数据
		                 	                }
		                 	                table += '<tr><td style="padding: 0 10px">' + axisData[i] + '</td>' + tdBodys + '</tr>';
		                 	                tdBodys = '';
		                 	            }
		                 	 
		                 	            table += '</tbody></table></div>';
		                 	            return table;
		                 	        },
                 	            },
                 	            mark: {show:true},
                 	            magicType: {type: ['line','bar']},
                 	            saveAsImage:{show:true}
                 	        }
                 	    },
                 			        tooltip: {
                 			            trigger: 'axis',
                 			            formater:'{a}{b}{c}',
                 			           axisPointer: {
                 			              type: 'shadow'
                 			          }
                 			        },
                 				    grid:{
                 				        x:30,
                 				        y:35,
                 				        x2:30,
                 				        y2:65,
                 				        //borderWidth:1,
                 				        //borderColor:'red',
                 				       show:true,
                 				    },
                 				    xAxis: {
                 				    	boundaryGap:true,
                 				        axisLine:{
                 				              lineStyle: {
                 				                  color: 'white'
                 				              },
                 				            show:true,
                 				        },
                 				       splitLine: {
                 				           show: false
                 				        },
                 				        
                 				        axisTick:{
                 				            show:true,
                 				            inside:false,
                 				            //boundaryGap:false
                 				            
                 				        },

                 				        axisLabel:{
                 				            show:true,
                 				            interval:0,
                 				            textStyle:{
                 				            	color:'white'
                 				            }
                 				        },
                 				        show:true,
                 				        type: 'category',
                 				        data: time_s,
                 				        
                 				    },
                 				    
                 				    yAxis: {
                 				        show:true,
                 				        name:'评分',
                 				        type: 'value',
                 				        boundaryGap:[0,0.01],
                 				        axisLine:{
                 				        	lineStyle:{
                     				        	color:'white'
                     				        }
                 				        },
                 				        axisTick:{
                 				        	show:false
                 				        },
                 				       splitLine: {
                 				            lineStyle: {
                 				                type: 'dashed'
                 				            }
                 				        },

                 				        axisLabel:{
                 				        	show:true,
                 				        	textStyle:{
                 				        		color:'white'
                 				        	}
                 				        }
                 				        
                 				    },
                 				    
                 				   dataZoom: [
                 				        {
                 				            type: 'slider',
                 				            show: true,
                 				            xAxisIndex: [0],
                 				            start: 0,
                 				            end: 100,
                 				           filterMode: 'filter',
                 				           zoomLock:false,
                 				        },{
                 				            type: 'inside',
                 				            xAxisIndex: [0],
                 				            start: 0,
                 				            end: 35
                 				        },
                 				    ],

                 				    series: [{
                 				        smooth:true,
                 				        name:'评分',
                 				        data: score,
                 				        type: 'bar',
                 				        itemStyle:{
                 				        	normal:{
                 				        		label:{
                 				        			show:true,
                 				        			position:'top',
                 				        			fontSize:16,
                 				        			color:"#fff"
                 				        			}
                 				        	}
                 				        },
                 				        markPoint:{
                 				            data:[
                 				                {type:'max',name:'最高分'},
                 				                {type:'min',name:'最低分'}
                 				                ]
                 				        },
/*                  				        markLine:{
                 				            data:[
                 				                {type:'average',name:'平均水位'}]
                 				        } */
                 				        },] 		  
                 				    });
                 	  }
                   }
        });       
     }  