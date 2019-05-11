require('dotenv').config();
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast');

//[2] is the additional data passed in the node app.js call i.e. node app.js "New York"
const address = process.argv[2]
//Check if address is entered
if(!address) {
    console.log('Please provide an address')
} else {
    //Geocode finds the lat, long and place name
    geocode(address, (error, { latitude, longitude, location }) => {
        if(error) return console.log(error);
        //Forcast finds the weather summary
        //Forcast uses the data object from geocode
        forcast(latitude, longitude, (error, forcastData) => {
            if(error) return console.log(error);
            //Data Return if all error false
            console.log(location);
            console.log(forcastData);
        });
    });
}



