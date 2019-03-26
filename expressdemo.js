const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname + '/userform.html'));
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to the application !!"});
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    res.json({"message": "Welcome to the application !!"});
});

// listen for requests
app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
