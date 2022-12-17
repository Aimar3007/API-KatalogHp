var Sequelize = require('sequelize')
var db = new Sequelize('katalog_hp', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost',
    operatorAliases: false
})

module.exports = db
