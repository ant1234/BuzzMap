(function(window, google, List) {

  var BuzzMap = (function() {

    function BuzzMap( element, opts ) { // set up map
      this.gMap = new google.maps.Map(element, opts);
      this.markers = List.create();
      if (opts.cluster) {
        this.markerClusterer = new MarkerClusterer(this.gMap, [], opts.cluster.options);
      }
    }

    // set up buzz map class 
    BuzzMap.prototype = {

      zoom: function(level) { // handle zoom
        if (level) {
          this.gMap.setZoom(level);
        } else {
          return this.gMap.getZoom();
        }
      },

      _on: function(opts) { // handle events 
        var self = this;
        google.maps.event.addListener(opts.obj, opts.event, function(e) {
          opts.callback.call(self, e, opts.obj);
        });
      },

      addMarker: function(opts) { // add marker & set up properties 

        var marker,
          self = this;

        opts.position = {
          lat: opts.lat,
          lng: opts.lng
        }

        marker = this._createMarker(opts);

        if (this.markerClusterer) {
          this.markerClusterer.addMarker(marker);
        }

        this._addMarker(marker);

        if (opts.events) {
          this._attachEvents(marker, opts.events);
        }

        if (opts.content) {

          this._on({
            obj: marker,
            event: 'click',
            callback: function() {
              var infoWindow = new google.maps.InfoWindow({
                content: opts.content
              });

              infoWindow.open(this.gMap, marker);
            }
          })

        }

        return marker;

      },

      _attachEvents: function(obj, events) { // attach events 

        var self = this;
        events.forEach(function(event) {
          self._on({
            obj: obj,
            event: event.name,
            callback: event.callback
          });
        });

      },

      _addMarker: function(marker) { 
        this.markers.add(marker);
      },

      findBy: function(callback) {
        this.markers.find(callback);
      },

      removeBy: function(callback) {
        var self = this;
        self.markers.find(callback, function(markers) {
          markers.forEach(function(marker) {
            if (self.markerClusterer) {
              self.markerClusterer.removeMarker(marker);
            } else {
              marker.setMap(null);
            }
          });
        });
      },

      _createMarker: function(opts) {
        opts.map = this.gMap;
        return new google.maps.Marker(opts);
      }

    };

    return BuzzMap;

  }());

  BuzzMap.create = function(element, opts) {
    return new BuzzMap(element, opts);
  };

  window.BuzzMap = BuzzMap;

}(window, google, List));