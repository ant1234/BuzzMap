(function(window, google){

// map options
var options = {
	center: {
		lat: -36.849333,
		lng: 174.761947
	},
	zoom: 10
}

var element = document.getElementById('map-canvas');

// map
var map = new google.maps.Map(element, options);

}(window, window.google));