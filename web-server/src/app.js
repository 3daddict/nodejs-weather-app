const express = require('express');

const app = express();

//Express get method
app.get('', (req, res) => {
    res.send('Hello World!');
});

app.get('/help', (req, res) => {
    res.send('Help Page')
});

app.get('/about', (req, res) => {
    res.send('Title Page')
});

app.get('/weather', (req, res) => {
    res.send('Weather Page')
})
 
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});