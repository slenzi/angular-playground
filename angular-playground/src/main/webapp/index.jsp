<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="en" ng-app="myApp" class="no-js"> <!--<![endif]-->
<head>

	<title>AngularJS Playground</title>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/app.css"/>

	<!--
	<script src="bower_components/html5-boilerplate/js/vendor/modernizr-2.6.2.min.js"></script>
	-->

</head>
<body>

<div ng-controller="myTestController">

	<div class="container">
	<div class="col-md-10">

		<!-- PAGE TITLE -->
		<div class="page-header">
			<h1><span class="glyphicon glyphicon-tower"></span>AngularJS Playground</h1>
		</div>

		<p>
		Hello! Click the "Hello Test" button and view the output in the JavaScript console.
		</p>

		<p>
		<button ng-click="helloTest()">Hello Test</button>
		</p>
        
        <p>
        $watch test:<br>
        <input type="text" placeholder="Enter some text" ng-model="myWatch" my-watch-directive />
        </p>
        <p>
        {{ myWatch }}
        </p>
  		<p>
        {{ myWatchTwo }}
        </p>

		<script src="bower_components/angular/angular.min.js"></script>
		<script src="js/app/app.js"></script>

	</div>
	</div>

</div>

</body>
</html>
