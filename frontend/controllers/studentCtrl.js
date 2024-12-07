studentCtrl = app.controller('studentCtrl', ['api_request', function (api_request) {
    console.log('studentCtrl')
    student = this
    api_request.http_request('GET', 'list_items/', { type: 36 }, '', 'application/json', (data) => {
        student.category = data.data
    })
    api_request.http_request('GET','profile/',"","",undefined,(data)=>{
        student.profileData=data.data[0]
     })
     descValid = /^[A-Za-z][A-Za-z 0-9\.\,\(\)\']{1,}$/gm;
    student.addGrievance = function () {
        grievanceform = new FormData(document.forms['grievance_form'])
        title = grievanceform.get('title')
        category = grievanceform.get('category')
        description = grievanceform.get('description')
        if (!category) {
            main.show_alert("danger", "Category is not selected")
        }else if(!descValid.test(description)){
            main.show_alert("danger", "Description is not valid")
        } else {
            console.log(title, category, description)
            api_request.http_request('POST', 'add_grievance/', "", grievanceform, undefined, (data) => {
                console.log(data)
                document.forms['grievance_form'].reset();
                img = document.querySelectorAll('.usr_image')
                img[0].src = 'https://indiaeducationdiary.in/wp-content/uploads/2021/02/SD-default-image.png'
                main.show_alert("success", data.message)
            })
        }
    }
    api_request.http_request('GET', 'list_grievance/', '', '', 'application/json', (data) => {
        student.pendingGrievance = data.data
        student.review=student.pendingGrievance.some((value)=>{
            return value.active
        })
    })


    //reject grievance status
    messagevalid = /^[A-Za-z][A-Za-z 0-9\.]{1,}$/i;
    student.rejectdata = {}
    student.reject = function (id) {
        student.rejectdata.id = id
    }
    student.rejectGrievance = function () {
        if (messagevalid.test(student.rejectdata.message)) {
            console.log(student.rejectdata)
            api_request.http_request('PATCH','resolve/', '', student.rejectdata, 'application/json', (data) => {
              main.show_alert('success',data.message)
              student.rejectdata = {}
              document.getElementById('close').click()
              api_request.http_request('GET', 'list_grievance/', '', '', 'application/json', (data) => {
                student.pendingGrievance = data.data
                student.review=student.pendingGrievance.some((value)=>{
                    return value.active
                })
            })
            })
        } else {
            main.show_alert("danger","enter a valid Reason")
        }
    }
    student.close = function (id) {
        console.log(id)
        api_request.http_request('PATCH', 'forward/', '', { "id": id }, 'application/json', (data) => {
            main.show_alert('success', data.message)
            api_request.http_request('GET', 'list_grievance/', '', '', 'application/json', (data) => {
                student.pendingGrievance = data.data
                student.review=student.pendingGrievance.some((value)=>{
                    return value.active
                })
            })
        })
    }

    //grievance history
    api_request.http_request('GET', 'grievance_history/', '', '', 'application/json', (data) => {
        student.grievanceHistory = data.data
        student.review=student.pendingGrievance.some((value)=>{
            return value.active
        })
    })

    api_request.http_request('GET', 'stats/', '', '', 'application/json', (data) => {
        student.stats = data.data[0]
      })
}])
