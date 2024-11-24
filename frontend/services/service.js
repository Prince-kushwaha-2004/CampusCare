app.service("api_request",["$http","$state",function($http,$state){

    this.http_request=function(method,path,params,data,content_type,success){
        var req = {
            method: method,
            url: `${baseurl}/${path}`,
            withCredentials:true,
            headers: {
                'Content-Type': content_type,
            },
            params:params,
            data: data
        }
        $http(req).then(function (response) {
            success(response.data);
        }, function (err) {
            console.log(err.data)
            main.show_alert("danger", "error", err.data.error)
        });
    }
}])
app.factory('httpInterceptor', function ($q) {

    var numLoadings = 0;
    return {
        request: function (config) {
            numLoadings++;
            main.load_start();
            return config || $q.when(config)
        },
        response: function (response) {
            if ((--numLoadings) === 0) {
                main.load_end()
            }
            return response || $q.when(response);
        },
        responseError: function (response) {
            if (!(--numLoadings)) {
                main.load_end()
            }
            return $q.reject(response);
        }
    };
})
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpInterceptor');
});





