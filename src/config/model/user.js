const Sequelize = require('sequelize')
const db = require('../db/mysql')
const seri = require('./seri')

const user = db.define('users',
    {
        nama: Sequelize.STRING,
        searched: Sequelize.STRING,
        id_seri: Sequelize.INTEGER,
    }, {
    freezeTableName: true,
    timestamps: false
})

// relasi ke tabel seri
// user.hasOne(seri, {foreignKey: 'id_seri'})
// user.belongsTo(seri, {foreignKey: 'id_seri'})

module.exports = user