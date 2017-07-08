(function(window, google, BuzzMap) {
  
  BuzzMap.MAP_OPTIONS = {
    center: {
		lat: -36.849333,
		lng: 174.761947
    },
    zoom: 10,
    disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    maxZoom: 11,
    minZoom: 9,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  };
  
}(window, google, window.BuzzMap || (window.BuzzMap = {})))	



