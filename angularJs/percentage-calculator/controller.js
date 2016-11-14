angular.module('myControllers', [])
	.controller('f1Controller', function($scope) {

		$scope.calculateF1 = function() {
			if ($scope.f1a=="" || $scope.f1a==undefined){ $scope.f1a=0 };
			if ($scope.f1b=="" || $scope.f1b==undefined){ $scope.f1b=0 };
			$scope.f1Result =  $scope.f1a / 100 * $scope.f1b
			if (isNaN($scope.f1a) || isNaN($scope.f1b)) {	
				$scope.showError = 'ERROR. NaN detected.';
			} else {
				$scope.showError = '';
			}
		}
	})
	.controller('f2Controller', function($scope) {	
		$scope.calculateF2 = function() {
			if ($scope.f2a=="" || $scope.f2a==undefined){ $scope.f2a=0 };
			if ($scope.f2b=="" || $scope.f2b==undefined){ $scope.f2b=0 };
			$scope.f2Result =  $scope.f2a / $scope.f2b * 100
			if (isNaN($scope.f2a) || isNaN($scope.f2b)) {	
				$scope.showError = 'ERROR. NaN detected.';
			} else {
				$scope.showError = '';
			}
		}
	})
	.controller('f3Controller', function($scope) {		
		$scope.calculateF3 = function() {		
			if ($scope.f3a=="" || $scope.f3a==undefined){ $scope.f3a=0 };
			if ($scope.f3b=="" || $scope.f3b==undefined){ $scope.f3b=0 };
			$scope.f3Result =  ($scope.f3b - $scope.f3a) / $scope.f3a  * 100;
			if (isNaN($scope.f3a) || isNaN($scope.f3b)) {	
				$scope.showError = 'ERROR. NaN detected.';
			} else {
				$scope.showError = '';
			}
		}
	})