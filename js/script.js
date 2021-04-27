var width = window.screen.width;
var height = window.screen.height;

if (typeof newrelic == 'object') {
newrelic.setCustomAttribute('screenWidth', width);
newrelic.setCustomAttribute('screenHeight', height);
}

