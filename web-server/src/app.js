const express = require('express');

const app = express();

//Express get method
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'Mike',
            age: 36
        },
        {
            name: 'Sarah',
            age: 26
        }
    ])
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
});

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'rainy',
        location: 'Montreal'
    })
})
 
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});