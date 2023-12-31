const express = require("express")
const router  = express.Router() 

const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Alessandra Pina',
        imagem: 'https://media.licdn.com/dms/image/D4D03AQHP--p4dYNFCA/profile-displayphoto-shrink_800_800/0/1672522794805?e=2147483647&v=beta&t=Bbsl4xzpUWDiprO0cpRLj_D6kuJn1p_O67DE3WNsZ94',
        minibio: 'Aspirante a desenvolvedora.'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)