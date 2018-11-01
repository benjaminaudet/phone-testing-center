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
        let printerSequence = [200, 50, 200, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, ];
        this.vibrateMusic = time => { navigator.vibrate(printerSequence) }
        this.vibrateSimple = time => { navigator.vibrate(1500) }
    }
};
