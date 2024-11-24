adminCtrl=app.controller('adminCtrl',['api_request',function(api_request){
    console.log('adminCtrl')
    admin=this
    emailvalid = /^[*A-Za-z]{1,}[*A-Za-z0-9]{0,}[\.\_\-A-Za-z0-9][*A-Za-z0-9]{1,}@[A-Za-z]{2,}\.[^@\s\/.0-9]{2,5}$/i;
    passvalid = /^(?=.*[A-Z])(?=.*[!@#$&])(?=.*[0-9])(?=.*[a-z]).{8,16}$/i;
    addressvalid =/^[*A-Za-z0-9]{2}(?=.*[a-z])[*A-Za-z\.\- 0-9]{1,}$/i;

    api_request.http_request('GET','list_items/',{type:"hostel"},'','application/json',(data)=>{
        admin.hostels=data.data
    })
    api_request.http_request('GET','list_items/',{type:"gender"},'','application/json',(data)=>{
        admin.genders=data.data
    })
    api_request.http_request('GET','list_items/',{type:'dept'},'','application/json',(data)=>{
        admin.department=data.data
    })
    api_request.http_request('GET','list_items/',{type:'qualification'},'','application/json',(data)=>{
        admin.qualifications=data.data
    })


    admin.studentRegister=function(){
            studentform = new FormData(document.forms['student_signupform'])
            pass1 = studentform.get('password_1')
            pass2 = studentform.get('password_2')
            email = studentform.get('email')
            address =studentform.get('address')
            console.log(pass1, pass2)
            console.log(studentform)
            if (!emailvalid.test(email)) {
                main.show_alert("danger", "error", "invalid mail")
            } else if (!addressvalid.test(address)) {
                title = "invalid address",
                    main.show_alert("danger", "error", title)
            }  else if (!passvalid.test(pass1)) {
                title = "Weak Password, should include an upper case, a number, an special Symbol and should be of length between 8 to 16",
                    main.show_alert("danger", "error", title)
            } else if (pass1 != pass2) {
                main.show_alert("danger", "error", "Password does not")
            }else {
                data=studentform
                api_request.http_request('POST','student_register/',"",data,undefined,(data)=>{
                    console.log(data)
                    document.forms['student_signupform'].reset();
                    img = document.querySelectorAll('.usr_image')
                    img[0].src = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                    main.show_alert("success",data.message)
                })
            }
        }
       
        admin.facultyRegister=function(){
            facultyform = new FormData(document.forms['faculty_signupform'])
            pass1 = facultyform.get('password_1')
            pass2 = facultyform.get('password_2')
            email = facultyform.get('email')
            address =facultyform.get('address')
            console.log(pass1, pass2)
            console.log(facultyform)
            if (!emailvalid.test(email)) {
                main.show_alert("danger", "error", "invalid mail")
            } else if (!addressvalid.test(address)) {
                title = "invalid address",
                    main.show_alert("danger", "error", title)
            }  else if (!passvalid.test(pass1)) {
                title = "Weak Password, should include an upper case, a number, an special Symbol and should be of length between 8 to 16",
                    main.show_alert("danger", "error", title)
            } else if (pass1 != pass2) {
                main.show_alert("danger", "error", "Password does not")
            }else {
                data=facultyform
                console.log(data)
                api_request.http_request('POST','faculty_register/',"",data,undefined,(data)=>{
                    console.log(data)
                    document.forms['faculty_signupform'].reset();
                    img = document.querySelectorAll('.usr_image')
                    img[0].src = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
                    main.show_alert("success",data.message)
                })
            }
        }
        //=====================
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
          mode:theme,
        },
    
        };

        var chart = new ApexCharts(document.querySelector("#chart1"), options);
        chart.render();

        var options = {
            series: [44, 55, 41, 17, 15],
            chart: {
            type: 'donut',
          },
          theme:{
            mode:theme,
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
  
          var chart = new ApexCharts(document.querySelector("#chart2"), options);
          chart.render();
}])
