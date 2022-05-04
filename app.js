const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dbConnect = require('./src/config/mongo')

const app = express()

app.use(cors())

const port = process.env.PORT

app.listen(port, () => {
    console.log('Server running')
})

dbConnect()