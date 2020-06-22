var id = [];
var state = [];
 
function drewWaterBumpEcharts(){
     $.ajax({
        type : "post",
        async : false,
        url : "Water_BumpServlet?method=getAllWaterBump",
        data : {},
        dataType : "json", 
        success : function(result) {
                   if (result) {
                 	  for (var i = 0; i < result.length; i++) {
							id[i] = result[i].id;
							state[i] = result[i].state;								
							}
                 	  
                 	 for (var i = 0; i < result.length; i++) {
                 		 
                 	 }
                 	  
                 	 
                 	  
                 	 var data = [
                 	     {
                 	         name: '1',
                 	         value: 100,
                 	         state: 0
                 	     },{
                 	         name: '2',
                 	         value: 100,
                 	         state: 0
                 	     },{
                 	         name: '3',
                 	         value: 100,
                 	         state: 1
                 	     },{
                 	         name: '4',
                 	         value: 100,
                 	         state: 2
                 	     }, {
                 	         name: '5',
                 	         value: 100,
                 	         state: 0
                 	     },{
                 	         name: '6',
                 	         value: 100,
                 	         state: 0
                 	     },{
                 	         name: '7',
                 	         value: 100,
                 	         state: 1
                 	     },{
                 	         name: '8',
                 	         value: 100,
                 	         state: 2
                 	     }]
                 	     
                 	     var titleArr= [], seriesArr=[];
                 	     colors=[['#00ff00'],['#ffff00'],['#ff0000']]
                 	     data.forEach(function(item, index){
                 	         titleArr.push(
                 	             {
                 	                 text:"水泵"+item.name,
                 	                 left: index * 12 + 6 +'%',
                 	                 top: '65%',
                 	                 textAlign: 'center',
                 	                 textStyle: {
                 	                     fontWeight: 'normal',
                 	                     fontSize: '16',
                 	                     color: item.state==0?colors[0]:(item.state==1?colors[1]:colors[2]),
                 	                     textAlign: 'center',
                 	                 },
                 	             }        
                 	         );
                 	         seriesArr.push(
                 	             {
                 	                 name: item.name,
                 	                 type: 'pie',
                 	                 clockWise: false,
                 	                 radius: [30,25],
                 	                 itemStyle:  {
                 	                     normal: {
                 	                         color: item.state==0?colors[0]:(item.state==1?colors[1]:colors[2]),
                 	                         shadowBlur: 0,
                 	                         label: {
                 	                             show: true
                 	                         },
                 	                         labelLine: {
                 	                             show: true
                 	                         },
                 	                     }
                 	                 },
                 	                 hoverAnimation: true,
                 	                 center: [index * 12 + 6 +'%', '40%'],
                 	                 data: [{
                 	                     value: item.state,
                 	                     label: {
                 	                         normal: {
                 	                             formatter: function(params){
                 	                                 return params.value=="0"?"正常":(params.value=="1"?"故障":"维修");
                 	                             },
                 	                             position: 'center',
                 	                             show: true,
                 	                             textStyle: {
                 	                                 fontSize: '20',
                 	                                 fontWeight: 'bold',
                 	                                 color: item.state==0?colors[0]:(item.state==1?colors[1]:colors[2])
                 	                             }
                 	                         }
                 	                     },
                 	                 }]
                 	             }    
                 	         )
                 	     });
                 	    
                 	     
                 	 option = {
                 	     title:titleArr,
                 	     series: seriesArr,

                 	 }
                 	  }
                  
                   }
        });    
     waterBump_chart.setOption(option);
     }  