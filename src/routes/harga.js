const express = require('express');
const router = express.Router()
const controller = require('../controller')

router.post('/', controller.harga.getAll)
router.post('/harga/toko', controller.harga.getHargaByToko)

module.exports = router