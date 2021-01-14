const express = require('express')
const router = express.Router()
const { 
    info_list, 
    info_create_post,
    info_update_patch,
    info_delete_delete
} = require('../controllers/infoController')

// GET request to list all Infos
router.get('/infos', info_list)

// POST request to create Info
router.post('/infos/add', info_create_post)

// PATCH request to update Info
router.patch('/infos/update/:id', info_update_patch)

// DELETE request to delete Info
router.delete('/infos/delete/:id', info_delete_delete)

module.exports = router