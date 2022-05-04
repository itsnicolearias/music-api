const express = require('express')
const cors = require('cors')
require('dotenv').config()
const dbConnect = require('./src/config/mongo')
const tracksRoutes = require('./src/routes/tracks.routes')
const storageRoutes = require('./src/routes/storage.routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

//routes
app.use('/api/tracks', tracksRoutes)
app.use('/api/storage', storageRoutes)

//server config
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server running')
})

//database
dbConnect()