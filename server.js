// adding express files
const express = require('express');
const app = express();

// making Port varibale 
const port = process.env.PORT || 3000;

// hbs module for easier routing 
const hbs = require('hbs');

// static page 
app.use(express.static('public'));

// hbs setup
// app.set('view engine', 'html');
// app.engine('html', require('hbs')._express)

// making route to home page
app.get('/',(req, res) => {
   res.render('index.html');
});


app.listen(port, () => {
  console.log(`Server starts on port ${port}.`);
});