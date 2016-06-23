var myFirstApp = angular.module('myFirstApp',[]);
myFirstApp.controller('firstController',function($scope){
	$scope.index = Math.floor(Math.random() * 1060) + 1;
	
	$scope.grey = false;
	$scope.greyparam = ($scope.grey)?'/g':'';
	
	$scope.blur = false;
	$scope.blur_effect = ($scope.blur)?'&blur':'';
	
	
	$scope.greyScale = function(){
		$scope.grey = !$scope.grey;
		$scope.greyparam = ($scope.grey)?'/g':'';
	}
	
	$scope.blurScale = function(){
		$scope.blur = !$scope.blur;
		$scope.blur_effect = ($scope.blur)?'&blur':'';
	}
});
