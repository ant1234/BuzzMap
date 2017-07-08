(function(window, BuzzMap) {

  // map options
  var options = BuzzMap.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = BuzzMap.create(element, options);

  var marker2 = map.addMarker({
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