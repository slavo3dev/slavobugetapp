// adding express files
const express = require('express');
const app = express();

// making Port varibale 
const port = process.env.PORT || 3000;

// hbs module for easier routing 
const hbs = require('hbs');

// use static 
app.use(express.static(__dirname + '/public'));

// hbs setup
app.set('view engine', 'html');
app.engine('html', hbs._express)

// making route to home page
app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.listen(port, () => {
  console.log(`Server starts on port ${port}.`);
  console.log(cat());
});