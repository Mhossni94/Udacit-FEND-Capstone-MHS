const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const fetch = require('node-fetch');
let weatherURI;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));
console.log(__dirname);
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
// designates what port the app will listen to for incoming requests
app.listen(3030, function () {
const port = "working on port 3030"
console.log(port)
})

app.post('/Data', function (req, res) {
  // The Magical Function 
return fetch(`http://api.geonames.org/searchJSON?q=${req.body.loc}&username=${process.env.uname_gn}`)
.then(data => data.json())
.then(function(data) {
    //data.geonames[0].lat
    //data.geonames[0].lng
    
    res.send(data);
//     if(Math.abs(res.date - Date.now()) > 604800000 ) {
//         weatherURI= `https://api.darksky.net/forecast/${process.env.DSAPI_KEY}/`
//     }
//     else {
//         weatherURI= `https://api.darksky.net/forecast/${process.env.DSAPI_KEY}/`
//     }
//     fetch(weatherURI)
// .then(weatherData => weatherData.json())
// .then(function(weatherData) {

//     fetch(`https://api.unsplash.com/search/photos?client_id=${process.env.us_KEY}&query=${req.body.loc}`)
// .then(imageData => imageData.json())
// .then(function(imageData) {
//     console.log(imageData.results[0].urls.regular)

//     let image = imageData.results[0].urls.regular;
// })
//     console.log(imageData.results[0].urls.regular)

//     let image = imageData.results[0].urls.regular;
// })
//     // console.log(data)
//     // res.send(data)
}).catch(error => console.log(error))
})
// 