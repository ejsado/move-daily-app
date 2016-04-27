angular.module( 'moveDailyApp', ['ngMaterial', 'ui.router'] )

	.controller("appCtrl", appCtrl )
	.controller("appMenuCtrl", appMenuCtrl )
	.controller("appHomeCtrl", appHomeCtrl )
	.controller("appWorkoutCtrl", appWorkoutCtrl )
	.controller("appLogWorkoutCtrl", appLogWorkoutCtrl )
	
	.factory("profileFactory", profileFactory )
	.factory("workoutFactory", workoutFactory )
	
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
			
			.state('app', {
				url:'/',
				views: {
					'page': {
						templateUrl: '/assets/partials/app.html',
						controller: 'appCtrl',
						controllerAs: 'appUtils'
					},
					'appContent@app': {
						templateUrl: '/assets/partials/home.html',
						controller: 'appHomeCtrl',
						controllerAs: 'homeUtils'
					}
				},
				data: {
					requireLogin: true,
					toolbarTitle: 'Home'
				}
			})
			.state('app.settings', {
				url:'settings',
				views: {
					'appContent@app': {
						templateUrl: '/assets/partials/settings.html'
					}
				},
				data: {
					toolbarTitle: 'Settings'
				}
			})
			.state('app.workout', {
				url:'workout',
				views: {
					'appContent@app': {
						templateUrl: '/assets/partials/workout.html',
						controller: 'appWorkoutCtrl',
						controllerAs: 'workoutUtils'
					}
				},
				data: {
					toolbarTitle: 'Choose Workout'
				}
			})
			.state('app.workout.log', {
				url:'/:logId',
				views: {
					'appContent@app': {
						templateUrl: '/assets/partials/logWorkout.html',
						controller: 'appLogWorkoutCtrl',
						controllerAs: 'logWorkoutUtils'
					}
				},
				data: {
					toolbarTitle: "Workout Routine"
				}
			})
			.state('app.workout.log.phase', {
				url:'/:phase'
			})
			
			.state('login', {
				url:'login',
				views: {
					'page': {
						templateUrl: '/assets/partials/login.html'
					}
				},
				data: {
					requireLogin: false
				}
			})
			
	}]);
;






























