function workoutFactory() {
	
	return {
		
		data: {
			
			categories: [
				{
					name: "Upper Body",
					removed: false,
					id: "cat1"
				},
				{
					name: "Lower Body",
					removed: false,
					id: "cat2"
				}
			],
			
			routines: [
				
				{
					name: "Back and Biceps",
					type: "routine",
					removed: false,
					color: "red",
					id: "rtn1",
					subroutines: [
						"exr1"
					]
				},
				
				{
					name: "Chest and Triceps",
					type: "routine",
					removed: false,
					color: "blue",
					id: "rtn2",
					subroutines: [
						"exr2"
					]
				},
				
				{
					name: "Morning Workout",
					type: "routine",
					removed: false,
					color: "purple",
					id: "rtn3",
					subroutines: [
						"rtn1",
						"rtn2"
					]
				}
			],
			
			exercises: [
				
				{
					name: "Pull ups",
					type: "exercise",
					removed: false,
					id: "exr1",
					category: "cat1",
					description: "Short description.",
					variations: [
						"Inverted",
						"One Arm",
						"Negative"
					],
					metrics: {
						duration: false,
						reps: true,
						distance: false,
						intervals: false,
						steps: false,
						caloriesBurned: false,
						weight: false,
						sets: true
					}
				},
				
				{
					name: "Push ups",
					type: "exercise",
					removed: false,
					id: "exr2",
					category: "cat1",
					description: "A description.",
					variations: [
						"Diamond",
						"One Arm"
					],
					metrics: {
						duration: false,
						reps: true,
						distance: false,
						intervals: false,
						steps: false,
						caloriesBurned: false,
						weight: false,
						sets: true
					}
				}
				
			],
			
			log: [
				
				{
					type: "workout",
					date: new Date('April 23, 2016'),
					id: "wrk2",
					metric: false,
					routineId: "rtn3",
					completed: true,
					routineStats: [
						{
							id: "rtn1",
							subroutines: [
								{
									id: "exr1",
									stats: {
										variation: "",
										reps: 10,
										sets: 3
									}
								}
							]
						},
						{
							id: "rtn2",
							subroutines: [
								{
									id: "exr2",
									stats: {
										variation: "",
										reps: 8,
										sets: 3
									}
								}
							]
						}
					]
				},
				{
					type: "workout",
					date: new Date('April 22, 2016'),
					id: "wrk1",
					metric: false,
					routineId: "rtn3",
					completed: true,
					routineStats: [
						{
							id: "rtn1",
							subroutines: [
								{
									id: "exr1",
									stats: {
										variation: "",
										reps: 10,
										sets: 3
									}
								}
							]
						},
						{
							id: "rtn2",
							subroutines: [
								{
									id: "exr2",
									stats: {
										variation: "",
										reps: 8,
										sets: 3
									}
								}
							]
						}
					]
				},
				
				{
					type: "weight",
					date: new Date('April 22, 2016'),
					id: "wgt2",
					weight: 190,
					metric: false
				},
				
				{
					type: "weight",
					date: new Date('April 17, 2016'),
					id: "wgt1",
					weight: 189,
					metric: false
				}
				
			]
		},
		
		trackedMetrics: [
			{
				name: "duration",
				text: "Duration",
				type: "text"
			},
			{
				name: "distance",
				text: "Distance",
				type: "number"
			},
			{
				name: "steps",
				text: "Steps",
				type: "number"
			},
			{
				name: "intervals",
				text: "Intervals",
				type: "number"
			},
			{
				name: "reps",
				text: "Reps",
				type: "number"
			},
			{
				name: "sets",
				text: "Sets",
				type: "number"
			},
			{
				name: "weight",
				text: "Weight",
				type: "number"
			},
			{
				name: "caloriesBurned",
				text: "Calories Burned",
				type: "number"
			}
		],
		
		getExerciseRoutineById: function(exrRtnId) {
			var exrRtnObject;
			this.data.exercises.forEach(function(item, index, array) {
				if (item.id == exrRtnId) {
					exrRtnObject = item;
					return;
				}
			});
			if (exrRtnObject == undefined) {
				this.data.routines.forEach(function(item, index, array) {
					if (item.id == exrRtnId) {
						exrRtnObject = item;
						return;
					}
				});
			}
			return exrRtnObject;
		},
		
		getWorkoutById: function(workoutId) {
			var workoutObject;
			this.data.log.forEach(function(item, index, array) {
				if (item.id == workoutId) {
					workoutObject = item;
					return;
				}
			});
			return workoutObject;
		},
		
		getWorkoutIndexById: function(workoutId) {
			var workoutIndex;
			this.data.log.forEach(function(item, index, array) {
				if (item.id == workoutId) {
					workoutIndex = index;
					return;
				}
			});
			return workoutIndex;
		},
		
		getLogEntriesByDate: function(workoutDate) {
			var logEntries = [];
			this.data.log.forEach(function(item, index, array) {
				if (item.date.getFullYear() == workoutDate.getFullYear() &&
					item.date.getMonth() == workoutDate.getMonth() &&
					item.date.getDate() == workoutDate.getDate()) {
						logEntries.push(item);
				}
			});
			return logEntries;
		},
		
		getCategoryById: function(catId) {
			var catObj;
			this.data.categories.forEach(function(item, index, array) {
				if (item.id == catId) {
					catObj = item;
					return;
				}
			});
			return catObj;
		},
		
		createNewId: function(idType) {
			var prefix;
			var listToSearch;
			switch(idType) {
				case 'category':
					prefix = 'cat';
					listToSearch = this.data.categories;
					break;
				case 'exercise':
					prefix = 'exr';
					listToSearch = this.data.exercises;
					break;
				case 'routine':
					prefix = 'rtn';
					listToSearch = this.data.routines;
					break;
				case 'workout':
					prefix = 'wrk';
					listToSearch = this.data.log;
					break;
				case 'weight':
					prefix = 'wgt';
					listToSearch = this.data.log;
					break;
				default:
					return;
			}
			var newId;
			var idNum = 0;
			listToSearch.forEach(function(item, index, array) {
				var itemPrefix = item.id.substring(0, 3);
				if (itemPrefix == prefix) {
					var currentNum = Number(item.id.substring(3));
					if (currentNum > idNum) {
						idNum = currentNum;
					}
				}
			});
			idNum++;
			return prefix + idNum;
			
		}
	}
	
}


