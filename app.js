require('dotenv').config();
const request = require('request');

const url = `https://api.darksky.net/forecast/${process.env.WEATHER_SECRET_KEY}/33.7455,117.8677`;

request({ url: url, json: true }, (error, response) => {
    if(error) {
        console.log('Unable to connect to weather service')
    } else if(response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.daily.data[0].summary);
    }
    
});

const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=${process.env.MAP_SECRET_KEY}`

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitute = response.body.features[0].center[0];
    console.log(latitude, longitute);
});