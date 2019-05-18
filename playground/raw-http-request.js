require('dotenv').config();
const https = require('https');
const url = `https://api.darksky.net/forecast/${process.env.WEATHER_SECRET_KEY}/40,-75`;

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

});

request.on('error', (error) => {
    console.log('An Error:', error);
});

request.end();