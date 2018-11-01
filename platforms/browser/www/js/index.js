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
        app.initCamera()
        function onBatteryStatus(status) {
            receivedElement.innerHTML = `Battery Level: ${status.level}`;
        }
    }
};
