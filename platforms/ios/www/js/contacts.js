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
        let BreakException = {};
        function onSuccess(contacts) {
            try {
                contacts.forEach(c => {
                    if (!c.displayName && !c.phoneNumbers && !c.emails && !c.displayName.includes('.')) {
                        throw BreakException;
                    }
                    var $tr = $('<tr>');
                    if (c.displayName) {
                        $tr.append($('<td>', {
                            class: 'mdl-data-table__cell--non-numeric',
                        }).text(c.displayName.trim().split(' ')[0]));
                    } else {
                        $tr.append($('<td>', {
                            class: 'mdl-data-table__cell--non-numeric',
                        }).text('Unknown'));
                    }

                    if (c.phoneNumbers) {
                        $tr.append($('<td>').text(c.phoneNumbers[0].value));
                    } else {
                        $tr.append($('<td>').text('Unknown'));
                    }

                    $('#contacts tbody').append($tr);
                })
            } catch (error) {
                console.error(error);
                throw BreakException;
            }
            
        }

        function onError(contactError) {
            alert('onError!');
        };

        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.phoneNumbers];

        navigator.contacts.find(fields, onSuccess, onError);
    }
};
