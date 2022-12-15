const Sequelize = require('sequelize')
const db = require('../db/mysql')

const toko = db.define('toko',
    {
        nama: Sequelize.STRING,
        logo: Sequelize.STRING,
    }, {
    freezeTableName: true,
    timestamps: false
})

module.exports = toko