const user = require('./user')
const handphone = require('./handphone')
const toko = require('./toko')
const brand = require('./brand')
const seri = require('./seri')
const harga = require('./harga')
const kameraHp = require('./kamera_hp')
const memoriHp = require('./memori_hp')
const platformHp = require('./platform_hp')

const model = {}

model.user = user
model.handphone = handphone
model.toko = toko
model.brand = brand
model.seri = seri
model.harga = harga
model.kameraHp = kameraHp
model.memoriHp = memoriHp
model.platformHp = platformHp

module.exports = model