function appWorkoutCtrl($state, workoutFactory, profileFactory) {
	
	this.dateOfWorkout = new Date();
	
	this.selectedWorkoutId;
	
	this.createWorkout = function() {
		if (this.dateOfWorkout != undefined &&
			this.selectedWorkoutId != undefined) {
				var newLogId = workoutFactory.createNewId('workout');
				workoutFactory.data.log.push({
					type: "workout",
					date: this.dateOfWorkout,
					id: newLogId,
					metric: profileFactory.settings.metric,
					routineId: this.selectedWorkoutId,
					completed: false,
					routineStats: []
				});
				$state.go('app.workout.log', {
					logId: newLogId,
					toolbarTitle: workoutFactory.getExerciseRoutineById(this.selectedWorkoutId).name
				});
		}
	}
}
















