const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})

module.exports = app;