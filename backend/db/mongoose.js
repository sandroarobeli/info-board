const mongoose = require('mongoose')
require('dotenv').config()

// Establish connection to the database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    console.log(`Connection to ${process.env.DB} database successful`)
})

// Connection state test
console.log(mongoose.STATES[mongoose.connection.readyState] + '...')