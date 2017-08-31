// adding express files
const express = require('express');
const app = express();

// hbs module for easier routing 
const hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', hbs._express)

// making route to home page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
     console.log("Server is working on port 3000 - localhost:3000")
});