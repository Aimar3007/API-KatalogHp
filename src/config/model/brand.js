const Sequelize = require('sequelize')
const db = require('../db/mysql')
const seri = require('./seri')

const brand = db.define('brands',
    {
        nama: Sequelize.STRING,
    }, {
    freezeTableName: true,
    timestamps: false
})

module.exports = brand