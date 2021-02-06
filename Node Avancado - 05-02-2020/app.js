const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const buscaCep = require('./src/functions/buscaCep')
const estadoCovid = require('./src/functions/estadoCovid')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')
app.set('views','./src/views')

app.get("/", (req, res) => {
    res.render('index')
})

app.post('/envia-cep', async(req, res)=>{
    const { cep } = req.body
    const resultado = await buscaCep(cep)

    console.log(resultado)
    
    res.render('resultados', {dado: resultado})
})

app.post('/rua-cep', async(req, res)=>{
    const { cep } = req.body
    const resultado = await buscaCep(cep)

    console.log(resultado)
    
    res.render('rua', {dado: resultado})
})




app.post('/covid', async(req, res)=>{
    const { estado } = req.body
    const resultado = await estadoCovid(estado)

    console.log(resultado)
    
    res.render('resulcovid', {dado: resultado})
})



app.listen(3333)