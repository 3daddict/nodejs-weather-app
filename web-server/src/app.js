const path = require('path');
const express = require('express');

const app = express();
//express static route to main dir
app.use(express.static(path.join(__dirname, '../public')));

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'rainy',
        location: 'Montreal'
    })
})
 
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});