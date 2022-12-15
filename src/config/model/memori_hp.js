const Sequelize = require('sequelize')
const db = require('../db/mysql')

const memoriHp = db.define('memori_hp',
    {
        penyimpanan: Sequelize.STRING,
        ram: Sequelize.STRING,
        bisa_diperluas: Sequelize.STRING,
    }, {
    freezeTableName: true,
    timestamps: false
})

module.exports = memoriHp