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
    $stateProvider.state(deanSW_dashboard)

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
    $stateProvider.state(student_dashboard)

}]);
