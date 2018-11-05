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
        function onSuccess(acceleration) {
            let a = {
                x: Math.round(acceleration.x * 100) / 100,
                y: Math.round(acceleration.y * 100) / 100,
                z: Math.round(acceleration.z * 100) / 100
            };
            $('#data #x').text(a.x < 0 ? a.x.toFixed(2) : `+${a.x.toFixed(2)}`)
            $('#data #y').text(a.y < 0 ? a.y.toFixed(2) : `+${a.y.toFixed(2)}`)
            $('#data #z').text(a.z < 0 ? a.z.toFixed(2) : `+${a.z.toFixed(2)}`)
            $('#dot').css('margin-left', `${115 - (parseFloat(a.x) * 12)}px`)
            $('#dot').css('margin-top', `${-165 + (parseFloat(a.y) * 12)}px`)

        };
        
        function onError() {
            alert('onError!');
        };
        
        var options = { frequency: 1 };
        
        var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
    }
};
