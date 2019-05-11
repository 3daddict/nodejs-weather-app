const request = require('request');

const forcast = (lat, long, callback) => {
const url = `https://api.darksky.net/forecast/${process.env.WEATHER_SECRET_KEY}/${lat},${long}`;

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Error: unable to connect to forcast weather services', undefined);
        } else if(response.body.length === 0) {
            callback('Error: Unable to find your input location', undefined);
        } else {
            callback(undefined, {
                forcast: response.body.daily.data[0].summary
            })
        }
    });
}

module.exports = forcast;