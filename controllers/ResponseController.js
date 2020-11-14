class Main {

    async Store(req, res) {
        try {
            let Resposta = require('../models/Resposta');
            
            let {body, perguntaId} = req.body;
        
            let Create = await Resposta.create({body: body,perguntaId: perguntaId})

            res.redirect('/pergunta/'+ perguntaId)
        
        } 
        catch(err) {
                console.log(error)
                res.status(401);
                res.json({msg: "Requisição invalida"})
            }
    }
}

module.exports = new Main();