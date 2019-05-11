require('dotenv').config();
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');

//Geocode finds the lat, long and place name
geocode('montreal', (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data);
    //Forcast finds the weather summary
    //Forcast uses the data object from geocode
    forcast(data.latitude, data.longitude, (error, data) => {
        console.log('Error:', error);
        console.log('Data:', data);
    });
});

