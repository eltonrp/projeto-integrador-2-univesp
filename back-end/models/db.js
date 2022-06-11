const { Sequelize } = require('sequelize')

// Conexão Local
const sequelize = new Sequelize('coletadb', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
})

// Imprime msg de sucesso ou erro. Usa-se apenas para desenvolvimento
sequelize.authenticate()
.then(() => {
  console.log('Conexão com banco de dados realizada com sucesso')
}).catch(() => {
  console.log('Erro: Não foi possível realizar a conexão com o banco de dados')
})

module.exports = sequelize