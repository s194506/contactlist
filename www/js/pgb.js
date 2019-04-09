function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
	
	function onSuccess(acceleration) {
		navigator.notification.alert('Acceleration X: ' + acceleration.x + '\n' +
			'Acceleration Y: ' + acceleration.y + '\n' +
			'Acceleration Z: ' + acceleration.z + '\n' +
			'Timestamp: ' + acceleration.timestamp + '\n');
	}

	function onError() {
		navigator.notification.alert('onError!');
	}

	var options = {
		frequency: 10000
	};

	var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

