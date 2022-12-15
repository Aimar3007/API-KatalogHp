const Sequelize = require('sequelize')
const db = require('../db/mysql')
const seri = require('./seri')
const toko = require('./toko')
const kameraHp = require('./kamera_hp')
const memoriHp = require('./memori_hp')
const platformHp = require('./platform_hp')

const handphone = db.define('handphones',
    {
        nama_hp: Sequelize.STRING,
        deskripsi: Sequelize.STRING,
        id_seri: Sequelize.INTEGER,
        gambar: Sequelize.STRING,
        // kamera HP
        kamera_utama: Sequelize.STRING,
        kamera_selfi: Sequelize.STRING,
        tipe_kamera: Sequelize.STRING,
        resolusi_video: Sequelize.STRING,

        // memori hp
        penyimpanan: Sequelize.STRING,
        ram: Sequelize.STRING,
        bisa_diperluas: Sequelize.STRING,

        // platform hp
        chipset: Sequelize.STRING,
        prosesor_inti: Sequelize.STRING,
        sistem_operasi: Sequelize.STRING,
        versi_os: Sequelize.STRING,

        // baterai hp
        kapasitas_baterai: Sequelize.STRING,
        charging: Sequelize.STRING,

        // koneksi hp
        usb_connectors: Sequelize.STRING,
        _5g: Sequelize.INTEGER,
        nfc: Sequelize.INTEGER,
        wifi_standard: Sequelize.STRING,

    }, {
    freezeTableName: true,
    timestamps: false
})

// relasi ke tabel seri
seri.hasOne(handphone, {foreignKey: 'id_seri'})
handphone.belongsTo(seri, {foreignKey: 'id_seri'})


module.exports = handphone