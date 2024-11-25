app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login")
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
        name: 'home.pending_greviances',
        url: 'pending_greviances',
        views: {
            'page': {
                templateUrl: 'templates/student/pending_greviances.html',
                controller: 'studentCtrl as student'
            }
        }
    }
    $stateProvider.state(student_dashboard)
    $stateProvider.state(Grievance)
    $stateProvider.state(Grievance_history)
    $stateProvider.state(pending_greviances)
}]);
