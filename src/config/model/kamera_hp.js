const Sequelize = require('sequelize')
const db = require('../db/mysql')

const kameraHp = db.define('kamera_hp',
    {
        kamera_utama: Sequelize.STRING,
        kamera_selfi: Sequelize.STRING,
        tipe_kamera: Sequelize.STRING,
        resolusi_video: Sequelize.STRING,
    }, {
    freezeTableName: true,
    timestamps: false
})

module.exports = kameraHp