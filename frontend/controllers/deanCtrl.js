deanCtrl = app.controller('deanCtrl', ['api_request', function (api_request) {
    console.log('deanCtrl')
    dean = this
    api_request.http_request('GET', 'list_faculty/', '', '', 'application/json', (data) => {
        dean.faculity_data = data.list
    })
    api_request.http_request('GET', 'list_items/', { "type": 33 }, '', 'application/json', (data) => {
        dean.roles = data.data
    })
    api_request.http_request('GET', 'profile/', "", "", undefined, (data) => {
        dean.profileData = data.data[0]
    })
    api_request.http_request('GET', 'all_grievance/', '', '', 'application/json', (data) => {
        dean.allGrieviances = data.data
    })
    api_request.http_request('GET', 'list_grievance/', '', '', 'application/json', (data) => {
        dean.pendingGrievance = data.data
    })

    dean.changeRole = function (fid, id) {
        d = document.getElementById(id)
        console.log(fid, d.value)
        api_request.http_request('POST', 'assign_roles/', '', { "user_id": fid, "role": d.value }, 'application/json', (data) => {
            console.log(data)
            api_request.http_request('GET', 'list_faculty/', '', '', 'application/json', (data) => {
                dean.faculity_data = data.list
            })
        })
    }
    dean.removeRole = function (fid, rid) {
        console.log(fid, rid)
        api_request.http_request('PATCH', 'assign_roles/', '', { "user": fid, "role": rid }, 'application/json', (data) => {
            api_request.http_request('GET', 'list_faculty/', '', '', 'application/json', (data) => {
                dean.faculity_data = data.list
            })
        })
    }
    dean.forward = function (id) {
        console.log("forward", id)
        api_request.http_request('PATCH', 'forward/', '', { "id": id }, 'application/json', (data) => {
            main.show_alert('success', data.message)
            api_request.http_request('GET', 'list_grievance/', '', '', 'application/json', (data) => {
                dean.grieviances = data.data
            })
        })
    }
    //=====================
    api_request.http_request('GET', 'stats/', '', '', 'application/json', (data) => {
        dean.stats = data.data[0]
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
        theme: {
            mode: main.theme,
        },

    };
    if (document.querySelector("#chart1")) {
        var chart = new ApexCharts(document.querySelector("#chart1"), options);
        chart.render();
    }

    var options = {
        series: [44, 55, 41, 17, 15],
        labels: ['carpenter', 'Mango', 'Orange', 'Watermelon', 'abcd'],
        chart: {
            type: 'donut',
        },
        theme: {
            mode: main.theme,
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
    if (document.querySelector("#chart2")) {
        var chart = new ApexCharts(document.querySelector("#chart2"), options);
        chart.render();
    }

}])

