// adding express files
const express = require('express');
const app = express();

// making route to home page
app.get('/', (req, res) => {
     res.render(home, (err, html) => {
       res.send(html);
     });
});

app.listen(3000, () => {
     console.log("Server is working on port 3000 - localhost:3000")
});