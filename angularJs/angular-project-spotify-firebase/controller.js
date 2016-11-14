angular.module('myControllers', ['myServices'])
	.controller('searchController', function($scope, $rootScope, spotifyService) {
		$scope.title = "SpotiFinder 🎶 😎"

		$scope.findArtists = function(e) {
			e.preventDefault();
			spotifyService.getArtists($scope.artistQuery)
				.then( function(response) {
						var artists = response.data.artists.items;
						$rootScope.$broadcast("artistsReady", artists)
				})
		}

	})
	.controller('artistsController', function($scope, $rootScope, spotifyService) {

		$rootScope.$on("artistsReady", function(e, dataArtists ) {
			$scope.artists = dataArtists
		})

		$scope.findAlbums = function() {
				spotifyService.getAlbums($scope.idArtist)
					.then( function(response) {
						var albums = response.data.items;
						$rootScope.$broadcast("albumsReady", albums)
					} )
			}

	})
	.controller('albumsController', function($scope, $rootScope, spotifyService) {

		$rootScope.$on("albumsReady", function(e, dataAlbums) {
			$scope.albums = dataAlbums;
		})

		$scope.findTracks = function() {
			console.log ("looking for tracks...")
				var idAlbum = $scope.dataAlbum.split("|")[0];
				$rootScope.coverAlbum = $scope.dataAlbum.split("|")[1];
				spotifyService.getTracks(idAlbum)
					.then( function(response) {
						var tracks = response.data.items;
						$rootScope.$broadcast("tracksReady", tracks)
					} )
			}
	})
	.controller("tracksController", function($scope, $rootScope) {

		$rootScope.$on("tracksReady", function(e, dataTracks) {
			$scope.tracks = dataTracks;
		})

	})
