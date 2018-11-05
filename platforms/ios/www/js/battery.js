function changeColorBatteryCharge(batteryLevel) {
    let $battery = $('#battery-charge');
    $battery.removeClass(['high', 'medium', 'low']);
    if (batteryLevel < 50 && batteryLevel >= 20) {
        $battery.addClass('medium')
    } else if (batteryLevel < 20) {
        $battery.addClass('low')
    } else {
        $battery.addClass('high')
    }
}

function changeStateBatteryCharge(batteryLevel) {
    let $battery = $('#battery-charge');
    let batteryLevelStr = `${batteryLevel}%`;
    $('#battery h2').text(batteryLevelStr)
    $battery.height(batteryLevelStr)
    if (batteryLevel < 99) {
        $battery.css('border-radius', '0px');
    }
}

function changeStatePlugged(isPlugged) {
    isPlugged ? null : $('#negation-state').text('not');
}

function onBatteryStatus(status) {
    changeStatePlugged(status.isPlugged)
    changeStateBatteryCharge(status.level);
    changeColorBatteryCharge(status.level);
    console.log(`Battery Level: ${status.level}`);
}

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        window.addEventListener("batterystatus", onBatteryStatus, true);
    },
    receivedEvent: function(id) {
        
    }
};
