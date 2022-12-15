const express = require('express');
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

const users = require('./routes/users')
const harga= require('./routes/harga')
const isiDatas= require('./routes/isiDatas')
app.use('/users', users)
app.use('/handphones', harga)
app.use('/isidatas', isiDatas)
app.use('/images', express.static('src/assets/images'))
app.use('/logos', express.static('src/assets/logos'))

app.use((req, res, next) => {
  res.status(200).json({
    message: "rest api"
  })
})

module.exports = app