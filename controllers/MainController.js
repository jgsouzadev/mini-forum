class Main {

    async Index(req, res) {
        try {
            let Pergunta = require('../models/Pergunta');
            let response = await Pergunta.findAll({ raw: true, order: [
                ['id','DESC']
            ] })
            res.render('index', {
                perguntas: response
            })    
        } catch (error) {
            res.status(401);
            res.json({msg: "Requisição invalida"})
        }
    }
}

module.exports = new Main();