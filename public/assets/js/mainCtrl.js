function appCtrl($mdSidenav, $state) {
	
	// this controller should only contain things that MUST be shared across the app
	
	this.text = 'text from main controller';
	
	this.openAppMenu = function() {
		$mdSidenav('appMenu').open();
	}
	this.closeAppMenu = function() {
		$mdSidenav('appMenu').close();
	}
	
	this.getToolbarTitle = function() {
		return $state.current.data.toolbarTitle;
	}
	
	this.goToState = function(state) {
		$state.go(state);
	}
	
}