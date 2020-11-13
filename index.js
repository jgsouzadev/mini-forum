const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const connection = require('./database/database')
const Model = require('./database/models/Pergunta')

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    Model.findAll({ raw: true, order: [
        ['id','DESC']
    ] }).then(perguntas => {
    res.render('index', {
        perguntas: perguntas
    });
    })
});

app.get('/perguntar', (req, res) => {
    res.render('perguntar');
});

app.post("/salvar", (req, res) => {
    let title = req.body.title;
    let desc = req.body.content;

    Model.create({
        title: title,
        description: desc
    })
    .then(() => {
        res.redirect('/');
    })
});

app.get('/pergunta/:id', (req, res) => {
    let id = req.params.id;
    Model.findOne({
        raw: true,
        where: {
            id: id
        }
    }).then(pergunta => {
        console.log(pergunta)
        if(pergunta != undefined) {
            res.render('pergunta', {
                pergunta: pergunta
            })
        } else {
            res.redirect('/')
        }

        

    });
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})