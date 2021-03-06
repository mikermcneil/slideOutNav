$(document).ready(function(){
	
	// Init sideNav
	$('body').slideOutNav({
		dragOpen: false
	});
	
	$('body').slideOutNav();
	
	// Save so its public methods are accessible
	var slideOutNav = $('body').data('slideOutNav');
	
	// Example click event calling sideNav public method
	$('#close').hammer().on("tap", function(){
		
		// Call var to access public methods
		slideOutNav.close();
		
		// Make sure not to return href
		return false;
	});
	
});