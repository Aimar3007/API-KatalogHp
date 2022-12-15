const users = require('./users')
const harga = require('./harga')
const isiDatas = require('./isiDatas')
const controller = {}

controller.users = users
controller.harga = harga
controller.isiDatas = isiDatas

module.exports = controller