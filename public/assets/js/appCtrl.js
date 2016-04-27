function appCtrl($mdSidenav, $state, profileFactory, workoutFactory) {
	
	// this controller should only contain things that MUST be shared across the app
	
	this.profile = profileFactory;
	
	this.workout = workoutFactory;
	
	this.todaysDate = new Date();
	
	this.openAppMenu = function() {
		$mdSidenav('appMenu').open();
	}
	this.closeAppMenu = function() {
		$mdSidenav('appMenu').close();
	}
	
	this.getToolbarTitle = function() {
		return $state.current.data.toolbarTitle;
	}
	
	this.goToState = function(state, params) {
		$state.go(state, params);
	}
	
	function decimalAdjust(type, value, exp) {
		// If the exp is undefined or zero...
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}
		value = +value;
		exp = +exp;
		// If the value is not a number or the exp is not an integer...
		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}
		// Shift
		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		// Shift back
		value = value.toString().split('e');
		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	// Decimal round
	this.round10 = function(value, exp) {
		return decimalAdjust('round', value, exp);
	};
	
	this.convertToKm = function(miles) {
		return miles * 1.60934;
	}
	
	this.convertToMiles = function(km) {
		return km * 0.621371;
	}
	
}