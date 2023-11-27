const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

// configurando o handlebars como template engine app.engine('handlebars', exphbs.engine())
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// os arquivos públicos fic
app.use(express.static("public"))

app.get('/', (requisicao, resposta) => {

resposta.render('home')
})

app.listen(3000, () => {
console.log("Servidor rodando na porta 3000!")
})