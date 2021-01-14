const express = require('express')
const router = express.Router()
const { 
    translator, 
    language_pairs,
} = require('../controllers/translatorController')


// GET request to perform translation
router.get("/translate", translator);
    
// GET request to list all "workable" language pairs   
router.get("/translators", language_pairs);


module.exports = router  