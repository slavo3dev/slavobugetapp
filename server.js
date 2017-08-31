// adding express files
const express = require('express');
const app = express();

// making route to home page
app.get('/', (req, res) => {
     res.render(home.html);
});