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

    initCamera: function() {
        let music = [200, 50, 200, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, 50, 100, 100, 50, 100, 200, 50, 200, ];
        this.vibrate = time => { navigator.vibrate(music) }
        this.getCurrentPos = () => navigator.geolocation.watchPosition(
            position => alert(
              `Latitude: ${position.coords.latitude}\n
              Longitude:${position.coords.longitude}\n
              Altitude: ${position.coords.altitude}\n
              Accuracy: ${position.coords.accuracy}\n
              Altitude Accuracy: ${position.coords.altitudeAccuracy }\n
              Heading:  ${position.coords.heading}\n
              Speed:    ${position.coords.speed}\n
              Timestamp: ${position.timestamp}\n`),
            positionError => () => {
                console.log(positionError);
                alert('error happened in locating');
            },
            { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });
        var data = { "duration" : 500, "intensity" : 100}
        this.vibrateIntense = time => { community.vibration.vibration_request(data, () => console.log('yeah')) }
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        app.initCamera()
        function onBatteryStatus(status) {
            receivedElement.innerHTML = `Battery Level: ${status.level}`;
        }
    }
};
