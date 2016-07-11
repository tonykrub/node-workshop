/* 3) Getting some data
Create a file called iss.js. In it, write a simple node program that will output the latitude 
and longitude of the International Space Station.
Practice your google-fu by searching for “iss api” and figuring out the correct URL to use. 
Hint: there are many options and they are all good :)
Notice that the values provided by the API are very precise. Round off the values to two 
decimal digits for a nicer display. Hint: toFixed
Save/commit/push
*/
var url = 'http://api.open-notify.org/iss-now.json';
var request = require('request');

request (url, function(err, response, body) {
    if (err) {
        console.log("There was an error");
    }
    else {
        var parseBody = JSON.parse(body);
        console.log(parseBody.ISS_Latitude);
        console.log(parseBody.ISS_Longitude);
    }
});