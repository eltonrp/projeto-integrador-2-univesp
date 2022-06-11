const express = require('express')
const cors = require('cors')
const app = express()


// Procedimentos da documentação Cors para o back-end aceitar as requisições
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
  res.header('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type, Authorization')
  app.use(cors())
  next()
})

const Home = require('./models/Home')

app.use(express.json())

app.get('/', async (req, res) => {
  
  // Busca todos os registros para mostrar
  await Home.findAll({
    attributes: ['id', 'name', 'address', 'cep', 'phone']
  })
    .then((datahome) => {
      return res.json({
        erro: false,
        datahome
      })
    }).catch(() => {
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: nenhum valor encontrado'
      })
    })
})

app.post('/post', async (req,res) => {

  // const dataHome = await Home.findOne()

  // Cria uma condição para salvar os dados
  // if(dataHome) {
  //   return res.status(400).json({
  //     erro: true,
  //     mensagem: 'Erro: Não cadastrado, já possui registro'
  //   })
  // }

  await Home.create(req.body)
  .then(() => {
    return res.json({
      erro: false,
      mensagem: 'Cadastro realizado com sucesso'
  })
  }).catch(() => {
    return res.json({
      erro: true,
      mensagem: 'Erro: Dados não cadastrados'
    })
  })
})

app.listen(8080, () => {
  console.log('Server iniciado na porta 8080...')
})