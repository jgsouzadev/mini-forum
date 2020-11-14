class Main {

    async NewQuestion(req, res) {
        res.render('perguntar');
    }

    async AskData(req, res) {
        try {
            let Pergunta = require('../models/Pergunta');
            let Resposta = require('../models/Resposta');
            
            let {id} = req.params;
            
            let DadoPergunta = await Pergunta.findOne({ raw: true,
                where: {
                    id: id
                }});
    
            if(DadoPergunta != undefined) {
                let Respostas = await Resposta.findAll({ raw: true,
                    where: {
                        perguntaId: DadoPergunta.id
                    }, order: [['id', 'DESC']]})

                    res.render('pergunta', { pergunta: DadoPergunta, respostas: Respostas })
            }      

        } catch (error) {
            console.log(error)
            res.status(401);
            res.json({msg: "Requisição invalida"})
        }
    }

    async Store(req, res) {
        try {
            let Pergunta = require('../models/Pergunta');
            let {title,content} = req.body;

            await Pergunta.create({
                title: title,
                description: content
            })

            res.redirect('/');
    } catch (error) {
            res.status(401);
            res.json({msg: "Requisição invalida"})
        }
    }
}

module.exports = new Main();