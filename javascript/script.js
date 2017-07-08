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

  var marker = map.addMarker({
	lat: -36.857975, 
	lng: 174.721354,
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
    icon: 'assets/icons/bar.png'
  });

}(window, window.BuzzMap));