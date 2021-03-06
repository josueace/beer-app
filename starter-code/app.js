const express = require('express');
const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// add the partials here:

// add the routes here:
app.get('/', (req, res) => res.render('index'));
app.get('/beers', (req, res) => {




    punkAPI.getBeers()
    .then(beersFromAPI =>{
        //console.log(beersFromAPI);
        let beers= {
            beer:beersFromAPI
        };
        
       res.render('beers',beers);
      // console.log(beersFromAPI);
    
    })
    .catch( err =>{ res.send("<h1>no beers</h1>")})
    
});
app.get('/random-beer', (req, res) => {




    punkAPI.getRandom()
    .then(beersFromAPI =>{
        //console.log(beersFromAPI);
        let beers= {
            beer:beersFromAPI
        };
        
       res.render('beers',beers);
      // console.log(beersFromAPI);
    
    })
    .catch( err =>{ res.send("<h1>no beers</h1>")})
    
});



app.listen(3000, () => console.log('🏃‍ on port 3000'));
