var myFirstApp = angular.module('myFirstApp',[]);
myFirstApp.controller('firstController',function($scope,$http){
	$scope.layout = 'list';
	
	$http.get('http://localhost/demo/images_json.json').then(function(response) {
        $scope.imageList = response.data;
    });
});
