var width = window.screen.availWidth;
var height = window.screen.availHeight;

if (typeof newrelic == 'object') {
newrelic.setCustomAttribute('screenWidth', width);
newrelic.setCustomAttribute('screenHeight', height);
}

