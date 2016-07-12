/* 4) Augmenting our application 
Create a file called iss-augmented.js. It will be similar to iss.js but more difficult!
Augment your ISS application to tell the user how “far” the ISS is from them. Here is how 
you will do it:
Using the prompt module, ask the user to enter their location (e.g. “montreal”)
Using Google’s Geolocation API, find out the latitude and longitude of the provided 
location. Here is how:
This URL: https://maps.googleapis.com/maps/api/geocode/json?address=montreal will show the 
lat/long for montreal
Explore this URL in your web browser to figure out where the lat/lng is located. Try to 
pass different values for “address” for educational purposes :)
When you are comfortable with finding the location based on an input address, you can then 
calculate the distance between the ISS and the user:
Look at this URL: http://www.movable-type.co.uk/scripts/latlong.html
It specifies a formula for calculating the distance. Scroll the page to the JavaScript 
portion, and create a function that uses the provided code. You don’t need to understand 
what is going on in there, it is very mathy!
NOTE: In order for this code to work, you’ll need to add the following code at the 
beginning of your program:
  Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }
Finally, display a message to the user telling them what their “distance” to the ISS is.
Save/commit/push
*/

var issUrl = 'https://api.wheretheiss.at/v1/satellites/25544'; // this is url of ISS(international space station)
var request = require('request'); // this is a format. for more info, click this link and scroll down: https://github.com/request/request
var prompt = require('prompt'); // this is a format. for more info, click this link and scroll down to look at example: https://github.com/flatiron/prompt
var locationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';  // why this link?


Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
 };



function calcDistance (lat1,lat2,lon1,lon2){
  var R = 6371e3; // this is in metres  // this part is from http://www.movable-type.co.uk/scripts/latlong.html
  var φ1 = lat1.toRadians();
  var φ2 = lat2.toRadians();
  var Δφ = (lat2-lat1).toRadians();
  var Δλ = (lon2-lon1).toRadians();

  var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  var d = R * c;
  console.log('the distance between the International Space Station and your location is: ' + Math.floor(d) + ' meters.'); // use Math.floor because it will return the largest so that we don't get too many decimal numbers.  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
}


// request(issUrl, function(err, location, body) { // this is a format. click on this link and scroll down: https://github.com/request/request
//   if (err) {
//       console.log('there was an error');
//   }
//   else {
//       var parseBody = JSON.parse(body);
//       var issLatitude = parseBody.latitude;
//       var issLongitude = parseBody.longitude;
//       // console.log('iss latitude: ' + issLatitude); // this is just to check ISS latitude
//       // console.log('iss longitude: ' + issLongitude); //this is just to check ISS longitude
//   }


// prompt.get('userLocation', function(err, answer) { // this is also a format. look at Ziad's note on 11 July regarding "Non-Blocking code with Javascript"
//   if (err){
//       console.log('sorry, there was an error');
//           }
//   else {
//       console.log(answer)
//       var placeUrl = locationUrl + answer.userLocation;   // what?
//       request(placeUrl, function (err, location, body) {  // what?
//           if (err){
//               console.log('there was an error');
//           }
//           else {
//               var parseBody = JSON.parse(body);
//               var userLatitude = parseBody.results[0].geometry.location.lat; // what?
//               var userLongitude = parseBody.results[0].geometry.location.lng;  // what?
//               // console.log('user latitude ' + userLatitude); //to check my user latitude
//               // console.log('user longitude ' + userLongitude); //to check my user longitude
//           calcDistance(issLatitude, userLatitude, issLongitude, userLongitude);
               
//           }
// });
//           }
//       })
//   }
// );

prompt.get('city', function(err, res) { // res = result
    
var issUrl = 'https://api.wheretheiss.at/v1/satellites/25544'; // this is url of ISS(international space station)
var locationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=';  // why this link?
var city = res.city;   // res = result
    request(locationUrl + city, function(err, res) {
        var body = JSON.parse(res.body);
        console.log(body);
        var lng1 = body.results[0].geometry.location.lng;
        var lat1 = body.results[0].geometry.location.lat;
        request(issUrl, function(err, res) {
            var body = JSON.parse(res.body);
            var lng2 = body.longitude;
            var lat2 = body.latitude;
           calcDistance(lat2, lat1, lng2, lng1);
        })
       
    })
      
})
//to understand the stuff for this question, read these; 
//https://www.npmjs.com/package/request
//https://www.npmjs.com/package/prompt


// var a = "hello";
// var b = 'Tony';

// console.log(a + " " + b)
 
// function hello() {
//   var a = 'hello';
//     function test() {
//       console.log(a)
//         function bye() {
//             var b = 'wasup';
//         }
//         console.log(b);
//     }
// }

// console.log(a);

