var app = angular.module('RestaurantRoulette', ['ngRoute']);

app.config(function ($routeProvider) { 
    $routeProvider 
        .when('/', { 
            controller: 'HomeController', 
            templateUrl: 'views/home.html' 
        }) 
		.when('/app', {
			controller: 'AppController',
			templateUrl: 'views/app.html'
		})
        .otherwise({ 
            redirectTo: '/' 
        }); 
});
