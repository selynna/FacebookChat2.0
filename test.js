var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'firefox'
    }
};
var client = webdriverio.remote(options);

webdriverio
    .remote(options)
    .init()
    .url('http://www.facebook.com/messages')
    .title(function(err, res) {
        console.log('Title was: ' + res.value);
    });
