homeCtrl=app.controller('homeCtrl',['$state','api_request',function($state,api_request){
    home=this
    date=new Date().toString()
    home.date=date.slice(8,10)+date.slice(3,7)+date.slice(10,15)
    console.log("homeCtrl")
    home.toggleNav=function(id){
        nav=document.getElementById(id)
        nav.classList.toggle('d-none')
    }
    //   sidebar
      api_request.http_request('GET','navbar/','','','application/json',(data)=>{
        home.nav=data.data
    })
    //roles
    api_request.http_request('GET','list_roles/','','','application/json',(data)=>{
        home.roles=data.data
    })

    api_request.http_request('GET','profile/',"","",undefined,(data)=>{
       home.profileData=data.data[0]
    })
    home.changeRole=function(id){
        d=document.getElementById(id)
        api_request.http_request('PUT','change_role/',"",{'role':d.value},'application/json',(data)=>{
            $state.go(data.state)
            api_request.http_request('GET','navbar/','','','application/json',(data)=>{
                home.nav=data.data
            })
            api_request.http_request('GET','list_roles/','','','application/json',(data)=>{
                home.roles=data.data
            })
        
         })
        console.log(d.value)
    }

    // home.nav=[
    //     {
    //         id:"1",
    //         title:"Home",
    //         icon:"bi-grid",
    //         state:"home.admin_dashboard",
    //         child:[]
    //     },
    //     // {
    //     //     id:"1",
    //     //     title:"Home",
    //     //     icon:"bi-grid",
    //     //     state:"home.deansw_dashboard",
    //     //     child:[]
    //     // },
    //     {
    //         id:"2",
    //         title:"Add member",
    //         icon:"bi-people-fill",
    //         state:null,
    //         child:[
    //             {
    //                 id:"4",
    //                 title:"Add Student",
    //                 icon:"bi-person-badge",
    //                 state:"home.studentRegister",
    //                 child:[]
    //             },
    //             {
    //                 id:"5",
    //                 title:"Add faculty",
    //                 icon:"bi-person-video3",
    //                 state:"home.facultyRegister",
    //                 child:[]
    //             },
    //         ]
    //     },
    //     {
    //         id:"9",
    //         title:"Assign Roles",
    //         icon:"bi-person-gear",
    //         state:"home.addRoles",
    //         child:[]
    //     },
    //     {
    //         id:"9",
    //         title:"Grievance",
    //         icon:"bi-lightbulb",
    //         state:"home.Grievance",
    //         child:[]
    //     },
    //     {
    //         id:"19",
    //         title:"Grevience History",
    //         icon:"bi-file-earmark-bar-graph-fill",
    //         state:"home.Grievance_history",
    //         child:[]
    //     },
    //     {
    //         id:"99",
    //         title:"Pending Greviances",
    //         icon:"bi-hourglass-bottom",
    //         state:"home.pending_greviances",
    //         child:[]
    //     },
    //     {
    //         id:"89",
    //         title:"Profile",
    //         icon:"bi-person-fill",
    //         state:"home.profile",
    //         child:[]
    //     },
    // ]
  
 

}])

