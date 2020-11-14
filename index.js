const app = require('./server.js')

const MainController = require('./controllers/MainController')
const AskController = require('./controllers/AskController')
const ResponseController = require('./controllers/ResponseController')

app.get('/', MainController.Index)

app.get('/perguntar', AskController.NewQuestion);

app.post("/salvar", AskController.Store);

app.get('/pergunta/:id', AskController.AskData)

app.post('/responder', ResponseController.Store)
