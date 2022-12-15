const Sequelize = require('sequelize')
const db = require('../db/mysql')

const platformHp = db.define('platform_hp',
    {
        chipset: Sequelize.STRING,
        prosesor_inti: Sequelize.STRING,
        sistem_operasi: Sequelize.STRING,
    }, {
    freezeTableName: true,
    timestamps: false
})

module.exports = platformHp