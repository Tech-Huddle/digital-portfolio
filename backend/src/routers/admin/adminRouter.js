const express = require('express');
const router = express.Router();
const {
    login
} = require('../../controllers/admin/adminController');


router.post('/login', login);


module.exports = router;