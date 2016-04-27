function appHomeCtrl($state, $timeout, workoutFactory) {
	
	this.selectedDate = new Date();
	
	this.entriesOnSelectedDate = [];
	
	this.getWorkoutsOnSelectedDate = function() {
		var logEntryArray = workoutFactory.getLogEntriesByDate(this.selectedDate);
		var entryArray = [];
		logEntryArray.forEach(function(item, index, array) {
			if (item.type == "workout") {
				var entry = workoutFactory.getExerciseRoutineById(item.routineId);
				entryArray.push({
					text: entry.name,
					color: entry.color
				});
			} else {
				var weightUnits = "lbs";
				if (item.metric == true) {
					weightUnits = "kg";
				}
				entryArray.push({
					text: "Weight: " + item.weight + " " + weightUnits,
					color: "gray"
				});
			}
		});
		
		this.entriesOnSelectedDate = entryArray;
		
	}
	this.getWorkoutsOnSelectedDate();
	
	function addCalendarEntryIndicators() {
		var todaysDate = new Date();
		var idDateString = '-' + todaysDate.getFullYear() + '-' + todaysDate.getMonth() + '-' + todaysDate.getDate();
		var calendarNum = 0;
		while (document.getElementById('md-' + calendarNum + idDateString) == null) {
			calendarNum++;
			if (calendarNum > 1000) {
				break;
			}
			//console.log(calendarNum);
		}
		console.log(calendarNum);
		workoutFactory.data.log.forEach(function(item, index, array) {
			var dateElementId = 'md-' + calendarNum + '-' + item.date.getFullYear() + '-' + item.date.getMonth() + '-' + item.date.getDate();
			var dateElement = document.getElementById(dateElementId);
			dateElement.style.position = 'relative';
			
			if (dateElement.childElementCount == 1) {
				var entryColorContainer = document.createElement("div"); 
				angular.element(entryColorContainer).addClass("entry-indicator-container");
			} else {
				var entryColorContainer = dateElement.lastElementChild;
			}
			
			var entryColorElement = document.createElement("span");
			if (item.type == "workout") {
				var entryColor = workoutFactory.getExerciseRoutineById(item.routineId).color;
			} else {
				entryColor = "gray";
			}
			entryColorElement.style.backgroundColor = entryColor;
			angular.element(entryColorElement).addClass("entry-color-indicator");
			
			dateElement.appendChild(entryColorContainer);
			entryColorContainer.appendChild(entryColorElement);
		});
	}
	// wait for the calendar to load before manipulating the DOM.....
	$timeout(addCalendarEntryIndicators, 50);
	
	
}