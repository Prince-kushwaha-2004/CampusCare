wardenCtrl=app.controller('wardenCtrl',['api_request',function(api_request){
    console.log('wardenCtrl')
    warden=this
    messagevalid =/^[*A-Za-z0-9]{2}(?=.*[a-z])[*A-Za-z\.\- 0-9]{1,}$/i;

    api_request.http_request('GET','list_grievance/','','','application/json',(data)=>{
      warden.grieviances=data.data
  })

 warden.rejectdata={}
  warden.reject=function(id){
    warden.rejectdata.id=5
  }
  warden.rejectGrievance=function(){
 
  if(!messagevalid.test(warden.rejectdata.message)){
    console.log(warden.rejectdata)
    warden.rejectdata={}
    document.getElementById('close').click()
  }else{
    main.show_alert("danger","enter a valid message")
  }
   
    //reject code here
  }
    //graph
    var options = {
        series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }],
        chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-20T01:30:00.000Z", "2018-09-21T02:30:00.000Z", "2018-09-22T03:30:00.000Z", "2018-09-23T04:30:00.000Z", "2018-09-24T05:30:00.000Z", "2018-09-25T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
      theme:{
        mode:main.theme,
      },
  
      };

  
      if(document.querySelector("#chart1")!=null){
        var chart = new ApexCharts(document.querySelector("#chart1"), options);
        chart.render();
      }

      var options = {
          series: [44, 55, 41, 17, 15],
          chart: {
          type: 'donut',
        },
        theme:{
          mode:main.theme,
        },
      
        responsive: [{
          breakpoint: 300,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };
        if(document.querySelector("#chart2")!=null){
          var chart = new ApexCharts(document.querySelector("#chart2"), options);
          chart.render();  
        }
     
}])
