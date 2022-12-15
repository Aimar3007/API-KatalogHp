const Sequelize = require('sequelize')
const db = require('../db/mysql')
const brand = require('./brand')

const seri = db.define('seri',
    {
        nama: Sequelize.STRING,
        id_brand: Sequelize.INTEGER,
    }, {
    freezeTableName: true,
    timestamps: false
})

// relasi ke tabel brand
brand.hasOne(seri, {foreignKey: 'id_brand'})
seri.belongsTo(brand, {foreignKey: 'id_brand'})

module.exports = seri