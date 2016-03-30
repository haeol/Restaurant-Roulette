app.controller('AppController', ['$scope', 'restaurants', function($scope, restaurants) {
	restaurants.success(function(data) {
		$scope.restaurants = data;
	}
}
