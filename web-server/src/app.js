const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Path definitions for express confirguration
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//set express to use handlebars templating engine
app.set('view engine', 'hbs');
//set the template folder dir for hbs views
app.set('views', viewsPath);
//set the partials folder for hbs to use
hbs.registerPartials(partialsPath);

//express static route to main dir
app.use(express.static(publicDirPath));

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