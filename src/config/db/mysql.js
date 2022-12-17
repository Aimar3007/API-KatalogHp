var Sequelize = require('sequelize')
var db = new Sequelize('katalog_hp', 'aimar', 'Password123#@!', {
    dialect: 'mysql',
    host: 'localhost',
    operatorAliases: false
})

module.exports = db
