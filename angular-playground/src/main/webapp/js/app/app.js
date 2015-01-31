/*
Sample application for testing angular code
-sal
*/

(function () {

	'use strict';

	var MyTestController = function($scope){

		var _this = this;

		$scope.helloTest = function(){
			_this.helloTest();
		};
	};
	MyTestController.prototype.helloTest = function(){
		console.info("MyTestController helloTest.");
	};
	
	var myWatchDirective = function(){
		function myLink(scope, element, attrs){
			scope.$watch(attrs.ngModel,function(value){
				console.log('Value has changed, new value is: ' + value);
				scope.myWatchTwo = 'myWatchTwo = ' + value;
			});
		};
		return {
			restrict: 'A',
			link: myLink
		};
	};

	MyTestController.$inject = ['$scope'];

	angular.module('myApp', [])
		.controller('myTestController', MyTestController)
		.directive('myWatchDirective', myWatchDirective);

})();
