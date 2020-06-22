var id = [];
var time_s = [];
var water_level = [];
var water_level2 = [];
function drewEcharts(){
     $.ajax({
        type : "post",
        async : false,
        url : "Water_levelServlet?method=getAllWaterLevel",
        data : {},
        dataType : "json", 
        success : function(result) {
                   if (result) {
                 	  for (var i = 0; i < result.length; i++) {
							id[i] = result[i].id;
							time_s[i] = result[i].time_s.substring(11,16);
							water_level[i] = result[i].water_level;	
							water_level2[i] = result[i].water_level2;	
							}
                 	  myChart.setOption({
                   	    toolbox: {
                 	        show: true,
                 	        orient: 'vertical',
                 	        top:30,
   				            right:0,
                 	        show: true,
                 	        feature: {
                 	            dataView: {
                 	                show: true,
                 	                backgroundColor:'#111820',
                 	                textColor:'#fff',
                 	                title: '数据视图',
                 	                optionToContent: function (opt) {
                 	                	var axisData = opt.xAxis[0].data;
		                 	            var series = opt.series;
		                 	            var tdHeaders = '<td>监测时间</td>'; //表头
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
               				        data: ['水仓1水位','水仓2水位'],
               				        itemWidth:40,
               				        itemHeight:20,
               				        textStyle:{
               				        	fontSize:16,
               				        	color:"white"
               				        }
               				    },
                 			        tooltip: {
                 			            trigger: 'axis',
                 			            formater:'{a}{b}{c}'
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
                 				    xAxis: [{
                 				    	boundaryGap:true,
                 				       splitLine: {    // gird区域中的分割线
                 				          show: true,  // 是否显示
                 				          lineStyle: {
                 				            // color: 'red',
                 				            // width: 1,
                 				            // type: 'solid'
                 				          }
                 				        },
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
                 				        data: time_s
                 				    },],
                 				    
                 				    yAxis: {
                 				        show:true,
                 				        name:'水位/米',
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
                 				        name:'水仓1水位',
                 				        data: water_level,
                 				        type: 'line',
                 				        itemStyle:{
                 				        	normal:{
                 				        		label:{
                 				        			show:true,
                 				        			position:'top'
                 				        			}
                 				        	}
                 				        },
                 				        markPoint:{
                 				            data:[
                 				                {type:'max',name:'最高水位'},
                 				                {type:'min',name:'最低水位'}
                 				                ]
                 				        },
/*                  				        markLine:{
                 				            data:[
                 				                {type:'average',name:'平均水位'}]
                 				        } */
                 				        },
                 				        
                 				        
                 				        
                 				        
                 				        
                 				       {
                     				        smooth:true,
                     				        name:'水仓2水位',
                     				        data: water_level2,
                     				        type: 'line',
                     				        itemStyle:{
                     				        	normal:{
                     				        		label:{
                     				        			show:true,
                     				        			position:'top'
                     				        			}
                     				        	}
                     				        },
                     				        markPoint:{
                     				            data:[
                     				                {type:'max',name:'最高水位'},
                     				                {type:'min',name:'最低水位'}
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