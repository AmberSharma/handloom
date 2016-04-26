var app = angular.module('handloomContactus', ['ngRoute']);
app.controller('contactusController', function($scope, $location, $rootScope, $http) {
	$scope.contactusRequest = function() {
		alert("acsd");
		$http({
	            url: '/contactus',
	            method: 'POST',
	            data: {
		            name: $scope.cf_name,
		            email: $scope.cf_email,
		            subject: $scope.cf_subject,
		            message: $scope.cf_message,
		        },
	            headers: {
	                'Content-Type': 'application/json'
	            }
	        }).success(function (data, status, headers, config) {
	        	alert(data);
			}).error(function (data, status, header, config) {
				$location.path('/');
			});
	};		
});