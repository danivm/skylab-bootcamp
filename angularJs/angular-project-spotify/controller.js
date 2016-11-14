angular.module('myApp')
	.controller('myController', function($scope, spotifyService) {

		$scope.title = "SpotiFinder 🎶 😎"
		$scope.artists='';
		$scope.albums='';
		$scope.albumImg='';
		$scope.tracks='';

		$scope.findArtists = function(e) {
			$scope.artists='';
			$scope.albums='';
			$scope.albumImg='';
			$scope.tracks='';
			e.preventDefault();
			spotifyService.getArtists($scope.artistQuery)
				.then( function(response) {
					$scope.artists = response.data.artists.items;
				})

		}

		$scope.findAlbums = function() {
				$scope.albumImg='';
				$scope.tracks='';
				spotifyService.getAlbums($scope.idArtist)
					.then( function(response) {
						$scope.albums = response.data.items;
					} )
			}
		$scope.findTracks = function() {
				$scope.albumImg=$scope.idAlbum.split('|')[1];
				spotifyService.getTracks($scope.idAlbum.split('|')[0])
					.then( function(response) {
						$scope.tracks = response.data.items;
					} )
			}	

	})