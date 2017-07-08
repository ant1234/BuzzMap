(function(window, google, BuzzMap) {
  
  BuzzMap.MAP_OPTIONS = {
    center: {
		lat: -41.287530,
		lng: 174.770449
    },
    zoom: 10,
    disableDefaultUI: false,
    scrollwheel: true,
    draggable: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      style: google.maps.ZoomControlStyle.DEFAULT
    },
    panControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  };
  
}(window, google, window.BuzzMap || (window.BuzzMap = {})))	



