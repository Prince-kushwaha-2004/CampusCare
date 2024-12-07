chiefCtrl=app.controller('chiefCtrl',['api_request',function(api_request){
    console.log('chiefCtrl')
    chief=this
    api_request.http_request('GET','profile/',"","",undefined,(data)=>{
        chief.profileData=data.data[0]
     })
     api_request.http_request('GET', 'all_grievance/', '', '', 'application/json', (data) => {
        chief.allGrieviances = data.data
      })
      api_request.http_request('GET', 'list_grievance/', '', '', 'application/json', (data) => {
        chief.pendingGrievance = data.data
    })
      chief.forward=function(id){
        console.log("forward",id)
        api_request.http_request('PATCH','forward/', '', {"id":id}, 'application/json', (data) => {
            main.show_alert('success',data.message)
            api_request.http_request('GET', 'list_grievance/', '', '', 'application/json', (data) => {
              chief.grieviances = data.data
            })
          })
      }
       //=====================
       api_request.http_request('GET', 'stats/', '', '', 'application/json', (data) => {
        chief.stats = data.data[0]
      })
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
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
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
      if(document.querySelector("#chart1")){
        var chart = new ApexCharts(document.querySelector("#chart1"), options);
        chart.render();
      }

      var options = {
          series: [44, 55, 41, 17, 15],
          labels: ['carpenter', 'Mango', 'Orange', 'Watermelon','abcd'],
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
        if(document.querySelector("#chart2")){
          var chart = new ApexCharts(document.querySelector("#chart2"), options);
          chart.render();
        }

}])
