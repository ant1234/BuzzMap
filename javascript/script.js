(function(window, BuzzMap) {

  // map options
  var options = BuzzMap.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),

  // create the map
  map = BuzzMap.create(element, options);

  // this is where you set all the properties for each marker 
  // for example, you could grab a collection of data from an array 
  // loop through it & display all the various lat / lng onto the map, 
  // change the icon based on the type of data, set up custom info etc

  for(var i = 0; i < 50; i++) {

  	map.addMarker({
  		id: i, 
		lat: -41.287530 + Math.random() / 7, 
		lng: 174.770449 + Math.random() / 7,
	    draggable: true,
	    events: [{
	      name: 'click',
	      callback: function(e, marker) {
	        console.log(e, marker);
	      }
	    }, {
	      name: 'dragend',
	      callback: function() {
	        alert('dragged');
	      }
	    }],
	    icon: 'assets/icons/bar.png', 
	    content: 'This is a bar in wellington, its ID is: ' + i
  	});

  }



}(window, window.BuzzMap));