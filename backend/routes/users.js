const express = require('express')
const router = express.Router()
const { 
    user_list, 
    user_create_post,
    user_delete_delete
} = require('../controllers/userController')


// GET request to list all Users.
router.get('/users', user_list)

// POST request create User.
router.post('/users/add', user_create_post)

// DELETE request to delete User
router.delete('/users/delete/:id', user_delete_delete)

module.exports = router