const Sequelize = require('sequelize')
const db = require('../db/mysql')
const toko = require('./toko')
const handphone = require('./handphone')

const harga = db.define('harga',
    {
        id_toko: Sequelize.INTEGER,
        harga: Sequelize.INTEGER,
        id_handphone: Sequelize.INTEGER,
    }, {
    freezeTableName: true,
    timestamps: false
})

// // relasi ke tabel toko
toko.hasOne(harga, {foreignKey: 'id_toko'})
harga.belongsTo(toko, {foreignKey: 'id_toko'})

// // relasi ke tabel handphone
handphone.hasOne(harga, {foreignKey: 'id_handphone'})
harga.belongsTo(handphone, {foreignKey: 'id_handphone'})

module.exports = harga