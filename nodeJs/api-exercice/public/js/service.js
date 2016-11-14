angular.module('myApp')
	.factory('studentsService', function($http) {

			function getStudents() {
				return $http.get("/data") ;
			}

			return {
				getStudents: getStudents,
			}
	})
	.factory('filterService', function($http) {

			function getFilter() {
				return $http.get("/filter") ;
			}

			return {
				getFilter: getFilter,
			}
	})