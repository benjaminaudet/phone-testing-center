/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        window.addEventListener("batterystatus", onBatteryStatus, false);

        
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
            console.log(`Battery Level: ${status}`, status);
        }
    }
};
