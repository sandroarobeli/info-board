const express = require('express')
const cors = require('cors')
require('dotenv').config()
require('./db/mongoose')

// Require individual routers
const infoRouter = require('./routes/infos')
const userRouter = require('./routes/users')
const translatorRouter = require('./routes/translator')

// Create the Server app and designate a port
const app = express()
const port = process.env.PORT || 8080

// Register middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Register individual routers
app.use(infoRouter)
app.use(userRouter)
app.use(translatorRouter)

// Start the Server
app.listen(port, () => {
    console.log('Server running on port: ' + port)
})
