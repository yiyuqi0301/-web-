var id = [];
var time_s = [];
var score1 = [];
var score2 = [];
var score3 = [];
var score4 = [];
 
function drewFailureEcharts(){
	id = [];
	time_s = [];
	score1 = [];
	score2 = [];
	score3 = [];
	score4 = [];
	
	//alert("进入方法");
	y = $("#year4").val();
	m = $("#month4").val();
	//alert(y+","+m);
     $.ajax({
        type : "post",
        async : false,
        url : "Evaluate_FailureServlet?method=getFailure",
        data : {year:y,month:m},
        dataType : "json", 
        success : function(result) {
                   if (result) {
                 	  for (var i = 0; i < result.length; i++) {
							id[i] = result[i].id;
							time_s[i] = result[i].time.substring(0,7);	
							score1[i] = result[i].score1;
							score2[i] = result[i].score2;
							score3[i] = result[i].score3;
							score4[i] = result[i].score4;
							}
                 	
                 	  
                 	  
                 	  failureChart.setOption({
                 		  
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
                 				    
                 				   legend: {
                 				        data: ['叶轮', '泵壳', '轴承', '填料密封装置'],
                 				       itemWidth:40,
               				        itemHeight:20,
               				        textStyle:{
               				        	fontSize:16,
               				        	color:"white"
               				        }
                 				    },
                 			        tooltip: {
                 			            trigger: 'axis',
                 			            formater:'{a}{b}{c}',
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
                 				        name:'叶轮',
                 				        data: score1,
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
                 				        }
                 				        },
                 				        
                 				        
                 				       {
                     				        smooth:true,
                     				        name:'泵壳',
                     				        data: score2,
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
                     				        }
                     				        },
                     				        
                     				        
                     				       {
                         				        smooth:true,
                         				        name:'轴承',
                         				        data: score3,
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
                         				        }
                         				        },
                         				        
                         				        
                         				       {
                             				        smooth:true,
                             				        name:'填料密封装置',
                             				        data: score4,
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
                             				        }
                             				        },] 		  
                 				    });
                 	  }
                   }
        });       
     }  








function drewAllFailureEcharts(){
	id = [];
	time_s = [];
	score1 = [];
	score2 = [];
	score3 = [];
	score4 = [];
	
	//alert("进入方法");
	y = $("#year4").val();
	//alert(y+","+m);
     $.ajax({
        type : "post",
        async : false,
        url : "Evaluate_FailureServlet?method=getAllFailure",
        data : {year:y},
        dataType : "json", 
        success : function(result) {
                   if (result) {
                 	  for (var i = 0; i < result.length; i++) {
							id[i] = result[i].id;
							time_s[i] = result[i].time.substring(0,7);	
							score1[i] = result[i].score1;
							score2[i] = result[i].score2;
							score3[i] = result[i].score3;
							score4[i] = result[i].score4;
							}
                 	
                 	  
                 	  
                 	  failureChart.setOption({
                 		  
                 				    toolbox:{
                 				    	orient:'vertical',
                 				    	showTitle:true,
                 				        show:true,
                 				        feature:{
                 				        	saveAsImage:{show:true},
                 				            mark:{show:'true'},
                 				            dataView:{show:'true'},
                 				            restore:{show:'true'},
                 				           
                 				        },
                 				        top:30,
                 				        right:0
                 				    },
                 				    
                 				   legend: {
                 				        data: ['叶轮', '泵壳', '轴承', '填料密封装置'],
                 				       itemWidth:40,
               				        itemHeight:20,
               				        textStyle:{
               				        	fontSize:16,
               				        	color:"white"
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
                 				            lineStyle: {
                 				                type: 'dashed'
                 				            }
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
                 				           show:false
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
                 				        name:'叶轮',
                 				        data: score1,
                 				        type: 'bar',
                 				        itemStyle:{
                 				        	normal:{
                 				        		label:{
                 				        			show:true,
                 				        			position:'top'
                 				        			}
                 				        	}
                 				        },
                 				        },
                 				        
                 				        
                 				       {
                     				        smooth:true,
                     				        name:'泵壳',
                     				        data: score2,
                     				        type: 'bar',
                     				        itemStyle:{
                     				        	normal:{
                     				        		label:{
                     				        			show:true,
                     				        			position:'top'
                     				        			}
                     				        	}
                     				        }
                     				        },
                     				        
                     				        
                     				       {
                         				        smooth:true,
                         				        name:'轴承',
                         				        data: score3,
                         				        type: 'bar',
                         				        itemStyle:{
                         				        	normal:{
                         				        		label:{
                         				        			show:true,
                         				        			position:'top'
                         				        			}
                         				        	}
                         				        }
                         				        },
                         				        
                         				        
                         				       {
                             				        smooth:true,
                             				        name:'填料密封装置',
                             				        data: score4,
                             				        type: 'bar',
                             				        itemStyle:{
                             				        	normal:{
                             				        		label:{
                             				        			show:true,
                             				        			position:'top'
                             				        			}
                             				        	}
                             				        }
                             				        },] 		  
                 				    });
                 	  }
                   }
        });       
     }  