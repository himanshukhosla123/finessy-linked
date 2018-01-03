app.config(function($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
    $routeProvider.when("/",{
        templateUrl:"front_page.html",
//        controller:"homeCtrl"
    }).when("/dashboard",{
        templateUrl:"../dashboard.html",
//        controller:"homeCtrl"
    }).when("/course",{
        templateUrl:"course2.html",
//        controller:"loginCtrl"
    }).when("/universities",{
        templateUrl:"UniversityList.html"
    })
    .when("/aboutus",{
        templateUrl:"aboutuspage.html"
    }).when("/contactus",{
        templateUrl:"contactuspage.html"
    }).when("/privacypolicy",{
        templateUrl:"privacypolicy.html"
    }).when("/termsofuse",{
        templateUrl:"termsofuse.html"
    }).when("/askus",{
        templateUrl:"askus.html"
    })
    .otherwise({template:"Error Page , No Match Found"
        ,redirectTo:"/"});
});