require('dotenv').config();
const request = require('request');
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');

geocode('montreal', (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data);
});

forcast(33.7455, 117.8677, (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data);
});