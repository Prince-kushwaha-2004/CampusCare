app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login")
    //home
    var home = {
        name: 'home',
        url: '/',
        views: {
            'main': {
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl as home'
            }
        }
    }
    var login = {
        name: 'login',
        url: '/login',
        views: {
            'main': {
                templateUrl: 'templates/login.html'
            }
        }
    }
    $stateProvider.state(home)
    $stateProvider.state(login)
    //admin
    var admin_dashboard = {
        name: 'home.admin_dashboard',
        url: 'admin_dashboard',
        views: {
            'page': {
                templateUrl: 'templates/admin/dashboard.html',
                controller: 'adminCtrl as admin'
            }
        }
    }
    var studentRegister = {
        name: 'home.studentRegister',
        url: 'studentRegister',
        views: {
            'page': {
                templateUrl: 'templates/admin/studentRegister.html',
                controller: 'adminCtrl as admin'
            }
        }
    }
    var facultyRegister = {
        name: 'home.facultyRegister',
        url: 'facultyRegister',
        views: {
            'page': {
                templateUrl: 'templates/admin/facultyRegister.html',
                controller: 'adminCtrl as admin'
            }
        }
    }
    var admin_profile = {
        name: 'home.admin_profile',
        url: 'admin/profile',
        views: {
            'page': {
                templateUrl: 'templates/admin/profile.html',
                controller: 'adminCtrl as admin'
            }
        }
    }
    var admin_all_grevances = {
        name: 'home.admin_all_grievances',
        url: 'admin/all_grevances',
        views: {
            'page': {
                templateUrl: 'templates/admin/allGrevance.html',
                controller:  'adminCtrl as admin'
            }
        }
    }
    $stateProvider.state(admin_all_grevances)
    $stateProvider.state(admin_profile)
    $stateProvider.state(studentRegister)
    $stateProvider.state(facultyRegister)
    $stateProvider.state(admin_dashboard)

    //deansw
    var deanSW_dashboard = {
        name: 'home.deansw_dashboard',
        url: 'deansw_dashboard',
        views: {
            'page': {
                templateUrl: 'templates/DeanSW/dashboard.html',
                controller: 'deanCtrl as dean'
            }
        }
    }
    var addRoles = {
        name: 'home.addRoles',
        url: 'addRoles',
        views: {
            'page': {
                templateUrl: 'templates/DeanSW/addRoles.html',
                controller: 'deanCtrl as dean'
            }
        }
    }

    var dean_profile = {
        name: 'home.dean_profile',
        url: 'dean/profile',
        views: {
            'page': {
                templateUrl: 'templates/DeanSW/profile.html',
                controller: 'deanCtrl as dean'
            }
        }
    }
    var dean_all_grevances = {
        name: 'home.dean_all_grievances',
        url: 'dean/all_grevances',
        views: {
            'page': {
                templateUrl: 'templates/DeanSW/allGrevance.html',
                controller:  'deanCtrl as dean'
            }
        }
    }
    //faculity -> dean
    var dean_pending_grevance = {
        name: 'home.dean_pending_grievance',
        url: 'dean/pending_grevance',
        views: {
            'page': {
                templateUrl: 'templates/DeanSW/pending_grievance.html',
                controller: 'deanCtrl as dean'
            }
        }
    }
    $stateProvider.state(dean_pending_grevance)
    $stateProvider.state(dean_all_grevances)
    $stateProvider.state(dean_profile)
    $stateProvider.state(deanSW_dashboard)
    $stateProvider.state(addRoles)

    //student
    var student_dashboard = {
        name: 'home.student_dashboard',
        url: 'student_dashboard',
        views: {
            'page': {
                templateUrl: 'templates/student/dashboard.html',
                controller: 'studentCtrl as student'
            }
        }
    }
    var Grievance = {
        name: 'home.Grievance',
        url: 'Grievance',
        views: {
            'page': {
                templateUrl: 'templates/student/grievance.html',
                controller: 'studentCtrl as student'
            }
        }
    }
    var Grievance_history = {
        name: 'home.Grievance_history',
        url: 'Grievance_history',
        views: {
            'page': {
                templateUrl: 'templates/student/greviance_history.html',
                controller: 'studentCtrl as student'
            }
        }
    }
    var pending_greviances = {
        name: 'home.pending_grievances',
        url: 'pending_greviances',
        views: {
            'page': {
                templateUrl: 'templates/student/pending_greviances.html',
                controller: 'studentCtrl as student'
            }
        }
    }

    var student_profile = {
        name: 'home.student_profile',
        url: 'student/profile',
        views: {
            'page': {
                templateUrl: 'templates/student/profile.html',
                controller: 'studentCtrl as student'
            }
        }
    }
    $stateProvider.state(student_profile)


    //home ctrl
    var profile = {
        name: 'home.profile',
        url: 'profile',
        views: {
            'page': {
                templateUrl: 'templates/home/profile.html',
                controller: 'homeCtrl as home'
            }
        }
    }

    $stateProvider.state(student_dashboard)
    $stateProvider.state(Grievance)
    $stateProvider.state(Grievance_history)
    $stateProvider.state(pending_greviances)
    $stateProvider.state(profile)

    //warden
    var warden_dashboard = {
        name: 'home.warden_dashboard',
        url: 'warden_dashboard',
        views: {
            'page': {
                templateUrl: 'templates/warden/dashboard.html',
                controller: 'wardenCtrl as warden'
            }
        }
    }
    var warden_grevance = {
        name: 'home.warden_grievance',
        url: 'warden/grevance',
        views: {
            'page': {
                templateUrl: 'templates/warden/Grevances.html',
                controller: 'wardenCtrl as warden'
            }
        }
    }
    var warden_profile = {
        name: 'home.warden_profile',
        url: 'warden/profile',
        views: {
            'page': {
                templateUrl: 'templates/warden/profile.html',
                controller: 'wardenCtrl as warden'
            }
        }
    }
    var warden_all_grevances = {
        name: 'home.warden_all_grievances',
        url: 'warden/all_grievances',
        views: {
            'page': {
                templateUrl: 'templates/warden/allGrevance.html',
                controller:  'wardenCtrl as warden'
            }
        }
    }
    $stateProvider.state(warden_all_grevances)
    $stateProvider.state(warden_profile)
    $stateProvider.state(warden_dashboard)
    $stateProvider.state(warden_grevance)

    //rector
    var rector_dashboard = {
        name: 'home.rector_dashboard',
        url: 'rector_dashboard',
        views: {
            'page': {
                templateUrl: 'templates/rector/dashboard.html',
                controller: 'rectorCtrl as rector'
            }
        }
    }
    var rector_profile = {
        name: 'home.rector_profile',
        url: 'rector/profile',
        views: {
            'page': {
                templateUrl: 'templates/rector/profile.html',
                controller: 'rectorCtrl as rector'
            }
        }
    }
    var rector_all_grevances = {
        name: 'home.rector_all_grievances',
        url: 'rector/all_grievances',
        views: {
            'page': {
                templateUrl: 'templates/rector/allGrevance.html',
                controller:   'rectorCtrl as rector'
            }
        }
    }
    var rector_pending_grevance = {
        name: 'home.rector_pending_grievance',
        url: 'rector/pending_grevance',
        views: {
            'page': {
                templateUrl: 'templates/rector/pending_grievance.html',
                controller: 'rectorCtrl as rector'
            }
        }
    }
    $stateProvider.state(rector_pending_grevance)
    $stateProvider.state(rector_all_grevances)
    $stateProvider.state(rector_profile)
    $stateProvider.state(rector_dashboard)

    //chief rector
    var chiefRector_dashboard = {
        name: 'home.chiefRector_dashboard',
        url: 'chiefRector_dashboard',
        views: {
            'page': {
                templateUrl: 'templates/ChiefRector/dashboard.html',
                controller: 'chiefCtrl as chief'
            }
        }
    }
    var chief_profile = {
        name: 'home.chief_profile',
        url: 'chief/profile',
        views: {
            'page': {
                templateUrl: 'templates/ChiefRector/profile.html',
                controller: 'chiefCtrl as chief'
            }
        }
    }
    var chief_all_grevances = {
        name: 'home.chief_all_grievances',
        url: 'chief/all_grievances',
        views: {
            'page': {
                templateUrl: 'templates/ChiefRector/allGrevance.html',
                controller:  'chiefCtrl as chief'
            }
        }
    }
    var chief_pending_grevance = {
        name: 'home.chief_pending_grievance',
        url: 'chief/pending_grevance',
        views: {
            'page': {
                templateUrl: 'templates/ChiefRector/pending_grievance.html',
                controller: 'chiefCtrl as chief'
            }
        }
    }
    $stateProvider.state(chief_pending_grevance)
    $stateProvider.state(chief_all_grevances)
    $stateProvider.state(chief_profile)
    $stateProvider.state(chiefRector_dashboard)

    //admin officer
    var adminOfficer_dashboard = {
        name: 'home.adminOfficer_dashboard',
        url: 'adminOfficer_dashboard',
        views: {
            'page': {
                templateUrl: 'templates/adminOfficer/dashboard.html',
                controller: 'AOCtrl as AO'
            }
        }
    }
    var AO_pending_greviances = {
        name: 'home.AO_pending_grievance',
        url: 'AO_pending_grievances',
        views: {
            'page': {
                templateUrl: 'templates/adminOfficer/pending_grievances.html',
                controller: 'AOCtrl as AO'
            }
        }
    }
    var AO_profile = {
        name: 'home.AO_profile',
        url: 'AO/profile',
        views: {
            'page': {
                templateUrl: 'templates/adminOfficer/profile.html',
                controller:  'AOCtrl as AO'
            }
        }
    }
    var AO_all_grevances = {
        name: 'home.AO_all_grievances',
        url: 'AO/all_grievances',
        views: {
            'page': {
                templateUrl: 'templates/adminOfficer/allGrevance.html',
                controller:   'AOCtrl as AO'
            }
        }
    }
    $stateProvider.state(AO_all_grevances)
    $stateProvider.state(AO_profile)
    $stateProvider.state(adminOfficer_dashboard)
    $stateProvider.state(AO_pending_greviances)
}]);
