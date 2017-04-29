// Getting some data
// Create a file called iss.js. In it, write a simple node 
// program that will output the latitude and longitude of the 
// International Space Station.
// Practice your google-fu by searching for “iss api” and 
// figuring out the correct URL to use. Hint: there are many 
// options and they are all good :)
// Notice that the values provided by the API are very precise. 
// Round off the values to two decimal digits for a nicer 
// display. Hint: toFixed
var url = 'http://api.open-notify.org/iss-now.json';
var request = require('request');

request(url, function (error, response, body) {
    if (error) {
        console.log("there was an error.");
    }
    else {
        var obj = JSON.parse(body);  // the information we received is 'string'. therefore we need to parse string into object, so that we can do something with it.
        console.log('Latitude: ' + obj.iss_position.latitude.toFixed(2));
        console.log('Longitude: ' + obj.iss_position.longitude.toFixed(2));
    }
})