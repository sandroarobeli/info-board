const mongoose = require('mongoose')


// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})


// Compile User Class
const User = mongoose.model('User', userSchema)

module.exports = User