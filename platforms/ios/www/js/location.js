var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        navigator.geolocation.watchPosition(
            position => {
                $('#latitude').text(position.coords.latitude)
                $('#longitude').text(position.coords.longitude)
            },
            positionError => () => {
                alert('error happened in locating');
            },
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true }
        );
    }
};