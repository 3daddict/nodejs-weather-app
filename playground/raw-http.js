require('dotenv').config();
const https = require('https');
const url = `https://api.darksky.net/forecast/${process.env.WEATHER_SECRET_KEY}/40,-75`;

const request = https.request(url, () => {
    let data = ''
    request.on('data', (chunk) => {
        console.log(chunk);
    })

    request.on('end', () => {

    })

});

request.end();