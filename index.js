const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const connection = require('./database/database')
const Model = require('./database/models/Pergunta')
const Model2 = require('./database/models/Resposta')

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
            Model2.findAll({
                raw: true,
                where: {
                    perguntaId: pergunta.id
                },
                order: [['id', 'DESC']]
            }).then((respostas) => {
                res.render('pergunta', {
                    pergunta: pergunta,
                    respostas: respostas
                })
            })


            
        } else {
            res.redirect('/')
        }

        

    });
})


app.post('/responder', (req, res) => {
    let body = req.body.body
    let perguntaId = req.body.perguntaId

    Model2.create({
        body: body,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect('/pergunta/'+ perguntaId)
    })
})

app.listen(3000, () => {
    console.log('Rodando na porta 3000')
})