const mongoose = require('mongoose')


// Info Schema
const infoSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 100
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
})

// Compile Info Class
const Info = mongoose.model('Info', infoSchema)


module.exports = Info
