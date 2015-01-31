/*
Sample application for testing angular code
-sal
*/

(function () {

	'use strict';

	/**
	 * Sample controller
	 */
	var MyTestController = function($scope){

		var _this = this;

		$scope.helloTest = function(){
			_this.helloTest();
		};
	};
	MyTestController.prototype.helloTest = function(){
		console.info("MyTestController helloTest.");
	};
	
	/**
	 * Sample directive which uses $watch with ng-model
	 */
	var myWatchDirective = function(){
		function myLink(scope, element, attrs){
			scope.$watch(attrs.ngModel,function(value){
				console.log('Value has changed, new value is: ' + value);
				scope.myWatchEcho = 'myWatchEcho = ' + value;
			});
		};
		return {
			restrict: 'A',
			link: myLink
		};
	};
	
	/**
	 * Similar to myWatchDirective but does not use ng-model
	 */
	var myWatchDirectiveTwo = function(){
		function myLink(scope, element, attrs){
			// detect outside changes and update our input
            scope.$watch('myWatchDirectiveTwo', function (val) {
                element.val(scope.myWatchDirectiveTwo);
            });
			element.bind('propertychange keyup paste', function (blurEvent) {
				console.log('watch2 value has changed, new value is: ' + element.val());
			});
		};
		return {
			restrict: 'A',
			link: myLink
		};
	};

	/**
	 * inject needed dependencies into controller
	 */
	MyTestController.$inject = ['$scope'];

	/**
	 * Create the app
	 */
	angular.module('myApp', [])
		.controller('myTestController', MyTestController)
		.directive('myWatchDirective', myWatchDirective)
		.directive('myWatchDirectiveTwo',['$parse',myWatchDirectiveTwo]);

})();
