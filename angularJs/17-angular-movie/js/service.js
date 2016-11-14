angular.module('myServices', [])
	.factory('moviesService', function($http) {
          function getPopular() {
            return $http.get("https://api.themoviedb.org/3/movie/popular?api_key=2ff1afd98edb9e8d031379a195fd30d2&language=en-US");
          }
          return {
            getPopular: getPopular
          }
      })