angular.module('myApp')
	.controller('studentsController', function($scope, studentsService) {

		$scope.findStudents = function() {
			$scope.students='';
			studentsService.getStudents()
				.then( function(response) {
					$scope.students = response.data;
				})
		}

	})
	.controller('filterController', function($scope, studentsService, filterService) {
		$scope.findStudents = function() {
			$scope.students='';
			studentsService.getStudents()
				.then( function(response) {
					$scope.students = response.data;
				})
		}
		$scope.findStudents()
		$scope.filterStudents = function() {
			filterService.getFilter()
				.then( function(response) {
					console.log(response)
					$scope.filter = response;
				})
		}
		$scope.filterStudents()

	})