const path = require('path');
const express = require('express');

const app = express();
//set express to use handlebars templating engine
app.set('view engine', 'hbs');
//express static route to main dir
app.use(express.static(path.join(__dirname, '../public')));
//get request to route handlebars page
app.get('', (req, res) => {
    //res.render page filename and then object data
    res.render('index', {
        title: 'Weather App',
        name: 'Mike'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Mike'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        description: 'This is the help page'
    });
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