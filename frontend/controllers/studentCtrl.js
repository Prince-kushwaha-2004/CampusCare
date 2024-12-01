studentCtrl=app.controller('studentCtrl',['api_request',function(api_request){
    console.log('studentCtrl')
    student=this
    api_request.http_request('GET','list_items/',{type:36},'','application/json',(data)=>{
        student.category=data.data
    })
    student.addGrievance=function(){
        grievanceform = new FormData(document.forms['grievance_form'])
        title=grievanceform.get('title')
        category=grievanceform.get('category')
        description=grievanceform.get('description')
        if(!category){
            main.show_alert("danger", "Category is not selected")
        }else{
            console.log(title,category,description)
            api_request.http_request('POST','add_grievance/',"",grievanceform,undefined,(data)=>{
                console.log(data)
                document.forms['grievance_form'].reset();
                img = document.querySelectorAll('.usr_image')
                img[0].src = 'https://indiaeducationdiary.in/wp-content/uploads/2021/02/SD-default-image.png'
                main.show_alert("success",data.message)
            })

        }
    }
    api_request.http_request('GET','list_grievance/','','','application/json',(data)=>{
        student.pendingGrievance=data.data
    })
}])
