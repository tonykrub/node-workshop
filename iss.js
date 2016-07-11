/* 3) Getting some data
Create a file called iss.js. In it, write a simple node program that will output the latitude 
and longitude of the International Space Station.
Practice your google-fu by searching for “iss api” and figuring out the correct URL to use. 
Hint: there are many options and they are all good :)
Notice that the values provided by the API are very precise. Round off the values to two 
decimal digits for a nicer display. Hint: toFixed
Save/commit/push
*/
var url = 'http://api.open-notify.org/iss-now.json';  // get this url from this link: http://open-notify.org/Open-Notify-API/ISS-Location-Now/ by clicking on the link under 'JSON'.
var request = require('request'); // this is like a format

request(url, function(err, response, body) { // this is like a format
    if (err) {
        console.log("There was an error");
    }
    else {
        var parseBody = JSON.parse(body); // parse to turn "body" into something that the system understands
        console.log(parseBody.iss_position.latitude.toFixed(2));
        console.log(parseBody.iss_position.longitude.toFixed(2));
    }
});