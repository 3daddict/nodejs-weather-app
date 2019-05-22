const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?proximity=-74.70850,40.78375&access_token=${process.env.MAP_SECRET_KEY}`

    request({ url, json: true }, (error, { body }) => {
        console.log('Key:', process.env.MAP_SECRET_KEY);
        console.log('Error:', error);
        console.log('Body:', body);
        if(error) {
            callback('Error: unable to connect to geo location services', undefined);
        } else if(body.features.length === 0) {
            callback('Error: Unable to find your input location', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    });
}

module.exports = geocode;