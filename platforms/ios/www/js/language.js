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
        navigator.globalization.getPreferredLanguage(
            language => {
                $('#preferred-language').text(this.isoLangs[language.value.split('-')[0]].name);
                $('#example-language').text(this.isoLangs[language.value.split('-')[0]].nativeName);
            }, 
            error => {
                console.error('Error happenned when trying to retrieve the preferred language of the device')
        });
    }
};
