var width = window.screen.width;
var height = window.screen.height;

var concatRes = width.concat('x', height);

if (typeof newrelic == 'object') {
newrelic.setCustomAttribute('screenWidth', width);
newrelic.setCustomAttribute('screenHeight', height);
newrelic.setCustomAttribute('screenResolution', concatRes);
}

