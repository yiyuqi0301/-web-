var id = [];
var time_s = [];
var water_rate = [];
var water_rate2 = [];
var water_rate3 = [];
var water_rate4 = [];
var water_rate5 = [];
var water_rate6 = [];
var water_rate7 = [];
var water_rate8 = [];
 
function drewWaterRateEcharts(){
     $.ajax({
        type : "post",
        async : false,
        url : "Water_RateServlet?method=getAllWaterRate",
        data : {},
        dataType : "json", 
        success : function(result) {
                   if (result) {
                 	  for (var i = 0; i < result.length; i++) {
							id[i] = result[i].id;
							time_s[i] = result[i].time_s.substring(11,16);
							water_rate[i] = result[i].rate;	
							water_rate2[i] = result[i].rate2;
							water_rate3[i] = result[i].rate3;
							water_rate4[i] = result[i].rate4;
							water_rate5[i] = result[i].rate5;
							water_rate6[i] = result[i].rate6;
							water_rate7[i] = result[i].rate7;
							water_rate8[i] = result[i].rate8;
							}
                 	 waterRate_chart.setOption({
                 		 
                 		 
      			        tooltip: {
     			            trigger: 'axis',
     			            formater:'{a}{b}{c}'
     			        },
     			        
       				   legend: {
      				        data: ['1号监测点水压','2号监测点水压','3号监测点水压','4号监测点水压','\n','5号监测点水压','6号监测点水压','7号监测点水压','8号监测点水压'],
      				        itemWidth:40,
      				        itemHeight:20,
      				        textStyle:{
      				        	fontSize:16,
      				        	color:"white"
      				        },
      				    },
                 		  
                 	    toolbox: {
                 	        show: true,
                 	        orient: 'vertical',
                 	        left: 'right',
                 	        top: 'center',
                 	        show: true,
                 	        feature: {
                 	            dataView: {
                 	                show: true,
                 	                title: '数据视图',
                 	                backgroundColor:'#111820',
                	                textColor:'#fff',
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
                 				       
                 				    


                 				    grid:{
                 				        x:40,
                 				        y:90,
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
                 				       splitLine: {    // gird区域中的分割线
                 				          show: true,  // 是否显示
                 				          lineStyle: {
                 				            // color: 'red',
                 				            // width: 1,
                 				            // type: 'solid'
                 				          }
                 				        },
                 				        data: time_s
                 				    },
                 				    
                 				    yAxis: {
                 				        show:true,
                 				        name:'压力/Mpa',
                 				        type: 'value',
                 				        boundaryGap:[0,0.01],
                 				       splitLine: {    // gird区域中的分割线
                 				          show: true,  // 是否显示
                 				          lineStyle: {
                 				            // color: 'red',
                 				            // width: 1,
                 				            // type: 'solid'
                 				          }
                 				        },
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
                 				        name:'1号监测点水压',
                 				        data: water_rate,
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
                 				                {type:'max',name:'最高水压'},
                 				                {type:'min',name:'最低水压'}
                 				                ]
                 				        },
//                  				        markLine:{
//                 				            data:[
//                 				                {type:'max',name:'警戒水位'}]
//                 				        } 
                 				        },
                 				        
                 				       {
                     				        smooth:true,
                     				        name:'2号监测点水压',
                     				        data: water_rate2,
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
                     				                {type:'max',name:'最高水压'},
                     				                {type:'min',name:'最低水压'}
                     				                ]
                     				        },
//                      				        markLine:{
//                     				            data:[
//                     				                {type:'max',name:'警戒水位'}]
//                     				        } 
                     				        },
                     				        
                     				       {
                         				        smooth:true,
                         				        name:'3号监测点水压',
                         				        data: water_rate3,
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
                         				                {type:'max',name:'最高水压'},
                         				                {type:'min',name:'最低水压'}
                         				                ]
                         				        },
//                          				        markLine:{
//                         				            data:[
//                         				                {type:'max',name:'警戒水位'}]
//                         				        } 
                         				        },
                         				        
                          				       {
                             				        smooth:true,
                             				        name:'4号监测点水压',
                             				        data: water_rate4	,
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
                             				                {type:'max',name:'最高水压'},
                             				                {type:'min',name:'最低水压'}
                             				                ]
                             				        },
//                              				        markLine:{
//                             				            data:[
//                             				                {type:'max',name:'警戒水位'}]
//                             				        } 
                             				        },
                             				        
                             				        
                               				       {
                                 				        smooth:true,
                                 				        name:'5号监测点水压',
                                 				        data: water_rate5,
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
                                 				                {type:'max',name:'最高水压'},
                                 				                {type:'min',name:'最低水压'}
                                 				                ]
                                 				        },
//                                  				        markLine:{
//                                 				            data:[
//                                 				                {type:'max',name:'警戒水位'}]
//                                 				        } 
                                 				        },
                                 				        
                                 				        
                                   				       {
                                     				        smooth:true,
                                     				        name:'6号监测点水压',
                                     				        data: water_rate6,
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
                                     				                {type:'max',name:'最高水压'},
                                     				                {type:'min',name:'最低水压'}
                                     				                ]
                                     				        },
//                                      				        markLine:{
//                                     				            data:[
//                                     				                {type:'max',name:'警戒水位'}]
//                                     				        } 
                                     				        },
                                     				        
                                       				       {
                                         				        smooth:true,
                                         				        name:'7号监测点水压',
                                         				        data: water_rate7,
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
                                         				                {type:'max',name:'最高水压'},
                                         				                {type:'min',name:'最低水压'}
                                         				                ]
                                         				        },
//                                          				        markLine:{
//                                         				            data:[
//                                         				                {type:'max',name:'警戒水位'}]
//                                         				        } 
                                         				        },
                                         				        
                                         				        
                                           				       {
                                             				        smooth:true,
                                             				        name:'8号监测点水压',
                                             				        data: water_rate8,
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
                                             				                {type:'max',name:'最高水压'},
                                             				                {type:'min',name:'最低水压'}
                                             				                ]
                                             				        },
//                                              				        markLine:{
//                                             				            data:[
//                                             				                {type:'max',name:'警戒水位'}]
//                                             				        } 
                                             				        },

                 				        ] 		  
                 				    });
                 	  }
                   }
        });       
     }  