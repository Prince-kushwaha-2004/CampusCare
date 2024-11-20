homeCtrl=app.controller('homeCtrl',['$http','$state','api_request',function($http,$state,api_request){
    home=this
    console.log("homeCtrl")
    home.toggleNav=function(id){
        nav=document.getElementById(id)
        nav.classList.toggle('d-none')
    }
    api_request.http_request('GET','profile/',"","",undefined,(data)=>{
       home.profileData=data.data[0]
    })
    home.nav=[
        {
            id:"1",
            title:"home",
            icon:"bi-house",
            state:"home.admin_dashboard",
            child:[]
        },
        {
            id:"1",
            title:"home",
            icon:"bi-house",
            state:"home.deansw_dashboard",
            child:[]
        },
        {
            id:"2",
            title:"Add member",
            icon:"bi-people-fill",
            state:null,
            child:[
                {
                    id:"4",
                    title:"Add Student",
                    icon:"bi-person-badge",
                    state:"home.studentRegister",
                    child:[]
                },
                {
                    id:"5",
                    title:"Add faculty",
                    icon:"bi-person-video3",
                    state:"home.facultyRegister",
                    child:[]
                },
            ]
        },
       
    ]
  
 

}])

