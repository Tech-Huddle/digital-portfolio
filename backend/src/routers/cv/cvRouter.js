const express = require('express');
const router = express.Router();
const {
    listCvDetails
} = require('../../controllers/cvDetails/cvDetailsController');


router.get('/data/:id', listCvDetails);

module.exports = router;