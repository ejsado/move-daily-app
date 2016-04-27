function appLogWorkoutCtrl($state, workoutFactory) {
	
	var workout = workoutFactory.getWorkoutById($state.params.logId);
	
	var currentExerciseRoutine = workoutFactory.getExerciseRoutineById(workout.routineId);
	
	$state.current.data.toolbarTitle = currentExerciseRoutine.name;
	
	function getExerciseList(workoutObj, exerciseArray) {
		if (workoutObj.type == 'exercise') {
			exerciseArray.push(workoutObj);
		} else {
			workoutObj.subroutines.forEach(function(item, index, array) {
				getExerciseList(workoutFactory.getExerciseRoutineById(item), exerciseArray);
			});
		}
	}
	
	var exerciseList = [];
	
	getExerciseList(currentExerciseRoutine, exerciseList);
	
	var exerciseIndex = 0;
	
	this.currentPhase = 1;
		
	if ($state.is('app.workout.log.phase')) {
		
		this.currentPhase = Number($state.params.phase);
		
		exerciseIndex = this.currentPhase - 1;
		
	}
	
	this.lastPhase = exerciseList.length;
	
	this.currentExercise = exerciseList[exerciseIndex];
	
	this.exerciseCategory = workoutFactory.getCategoryById(this.currentExercise.category);
	
	this.workoutProgress = (this.currentPhase / this.lastPhase) * 100;
	
	if (exerciseIndex >= workout.routineStats.length ||
		workout.routineStats[exerciseIndex] == undefined) {
		this.currentExerciseStats = {
			id: this.currentExercise.id,
			variation: '',
			stats: {}
		}
	} else {
		this.currentExerciseStats = workout.routineStats[exerciseIndex];
	}
	
	this.saveMetrics = function() {
		console.log(this.currentExerciseStats);
		var workoutIndex = workoutFactory.getWorkoutIndexById(workout.id);
		workoutFactory.data.log[workoutIndex].routineStats[exerciseIndex] = this.currentExerciseStats;
	}
	
	this.prevExercise = function() {
		this.saveMetrics();
		$state.go('app.workout.log.phase', {
			phase: String(this.currentPhase - 1)
		}, {
			reload: true
		});
	}
	
	this.nextExercise = function() {
		this.saveMetrics();
		$state.go('app.workout.log.phase', {
			phase: String(this.currentPhase + 1)
		}, {
			reload: true
		});
	}
	
	this.completeWorkout = function() {
		this.saveMetrics();
		// show modal
	}
	
}









