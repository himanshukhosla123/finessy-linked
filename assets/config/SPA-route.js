app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('!');
    $routeProvider.when("/",{
        templateUrl:"home.html",
//        controller:"homeCtrl"
    }).when("/dashboard",{
        templateUrl:"dashboard.html",
//        controller:"homeCtrl"
    }).when("/course",{
        templateUrl:"course2.html",
//        controller:"loginCtrl"
    }).otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});