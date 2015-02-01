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

		this.getScope = function(){
			return $scope;
		};
		
		$scope.helloTest = function(){
			_this.helloTest();
		};
		
		$scope.doDebugScope = function(){
			_this.doDebugScope();
		}
	};
	MyTestController.prototype.helloTest = function(){
		console.info("MyTestController helloTest.");
	};
	MyTestController.prototype.doDebugScope = function(){
		console.log(this.getScope());
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
			
			// set the initial value of the textbox
            //element.val(scope.myWatchDirectiveTwo);
            //element.data('old-value', scope.myWatchDirectiveTwo);
			
			// detect outside changes and update our input
            scope.$watch('myWatchDirectiveTwo', function (val) {
			    element.val(scope.myWatchDirectiveTwo);
            });
			element.bind('propertychange keyup paste', function (blurEvent) {
				console.log('watch2 value has changed, new value is: ' + element.val());
				scope.$apply(function () {
                    scope.myWatchDirectiveTwo = element.val();
                    //console.log(scope.myWatchDirectiveTwo);
                    //element.data('old-value', element.val());
                    scope.myWatchTwo = element.val();
                });
			});
		};
		return {
			restrict: 'A',
            scope: {
            	myWatchDirectiveTwo: '='
            },
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
