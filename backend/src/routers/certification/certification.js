const express = require('express');
const router = express.Router();
const {
    createcertification,
    listcertification,
    updatecertification,
    deletecertification
} = require('../../controllers/certification/certification');


router.post('/create', createcertification);
router.get(['/list', '/list/:id'], listcertification);
router.patch('/update/:id', updatecertification);
router.delete('/delete', deletecertification);

module.exports = router;