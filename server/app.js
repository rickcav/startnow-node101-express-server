// import files and packages up here


// create your express server below
let express = require('express');
let app = express();
let data = require('./data.json');
let morgan = require('morgan');
app.use(morgan('dev'));

// app.use(express.static(path.join(__dirname, 'C:\Users\Rick C\oca\startnow-web101-san-diego-top-spots\main.js')));
app.use(express.static("/Users/Rick C/oca/startnow-web101-san-diego-top-spots"));
app.get('/data', function(req, res) {
    res.status(200).json(data)
    message: ('this is working')
});

// app.use(express.static(path.join(__dirname, 'C:\Users\Rick C\oca\startnow-web101-san-diego-top-spots\main.js')));

//Get port and store in Express
// let port = process.env.PORT || 3000;
// app.set('port', port);
// app.listen(port);
// // add your routes and middleware below



// finally export the express application
module.exports = app;
// make the javascript file static "?" --(untested)--
// app.use(express.static(path.join(__dirname, 'public')));