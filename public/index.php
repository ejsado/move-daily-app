<!DOCTYPE html>
<html lang="en">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title>Move Daily</title>
		
		<link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc2/angular-material.css">
		<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="/assets/styles/main.css">
		
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc4/angular-material.js"></script>
		
		<script src="/assets/js/appCtrl.js"></script>
		<script src="/assets/js/appMenuCtrl.js"></script>
		<script src="/assets/js/appHomeCtrl.js"></script>
		<script src="/assets/js/appWorkoutCtrl.js"></script>
		<script src="/assets/js/appLogWorkoutCtrl.js"></script>
		
		<script src="/assets/js/workoutFactory.js"></script>
		<script src="/assets/js/profileFactory.js"></script>
		
		<script src="/assets/js/app.js"></script>
		
	</head>
    <body
		ng-app="moveDailyApp">
		
		<main ui-view="page" layout="row" layout-fill>
			<!-- content will be replaced with state template -->
		</main>

	</body>
</html>