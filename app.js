require('dotenv').config();
const request = require('request');

const url = `https://api.darksky.net/forecast/${process.env.SECRET_KEY}/37.8267,-122.4233`;

request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
});