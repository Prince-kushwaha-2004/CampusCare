const baseurl="https://10.21.96.56:8888/CampusCare"
const app=angular.module('myApp',['ui.router'])
mainCtrl=app.controller('mainCtrl',['$http','$state','api_request','$timeout',function($http,$state,api_request,$timeout){

    main=this
    main.imgurl=`${baseurl}/media/`
    main.alert={}
    main.show_alert=function(status,title,text){
        main.alert.show=true
        main.alert.status=status
        main.alert.title=title
        main.alert.text=text
        $timeout(function () {
            main.alert.show=false
          }, 3000);
    }
    main.hide_alert=function(){
        main.alert.show=false
    }

    main.login=function(email,password){
        data={
            email,
            password
        }
        api_request.http_request('POST','login/',"",data,'application/json',(data)=>{
            console.log(data)
            $state.go('home')
        })
    }
    main.logout=function(){
        api_request.http_request('GET','logout/',"","",'application/json',(data)=>{
            console.log(data)
            $state.go('login')
        })
    }
 
    main.load_start=function(){
        document.querySelector('#preloader').style.display = 'block'
    }
    main.load_end=function(){
        document.querySelector('#preloader').style.display = 'none'
    }
}])

function displaySelectedImage(event, elementId) {
    const selectedImage = document.getElementById(elementId);
    const imgObj = event.target.files[0];
    console.log(imgObj)
        const acceptedTypes = ['png', 'jpg', 'jpeg'];
        const acceptedTypesLong = ['image/png', 'image/jpg', 'image/jpeg'];
        fileUploader=event.target
        console.log(fileUploader)
        const nameExtension = imgObj.name.split('.').pop();
        if (!acceptedTypes.includes(nameExtension)) { 
            console.log("err")
            fileUploader.value = null;  
            Swal.fire({
                position: "top",
                icon: "error",
                title: "invalid image formet",
                showConfirmButton: false,
                timer: 3000
            });
        }
        else if(!acceptedTypesLong.includes(imgObj.type)) {
            console.log("err2")
            fileUploader.value = null;  
            Swal.fire({
                position: "top",
                icon: "error",
                title: "invalid image formet",
                showConfirmButton: false,
                timer: 3000
            });
        }else{
            const fileInput = event.target;
            if (fileInput.files && fileInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    selectedImage.src = e.target.result;
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        }
}

function visible(id,pass){
    inp=document.getElementById(id)
    pass=document.getElementById(pass)
    pass.classList.toggle('fa-eye-slash')
    pass.classList.toggle('fa-eye')
    if(inp.type=='password'){
        inp.type='text'
    }else{
        inp.type='password'
    }
}
hidenav=function(){
    document.querySelector('.resnav').classList.toggle('hide-nav')
    document.querySelector('#hide').classList.toggle('none')
}
