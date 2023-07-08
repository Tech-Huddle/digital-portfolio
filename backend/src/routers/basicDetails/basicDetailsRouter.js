const express = require('express');
const router = express.Router();
const {
    createBasicDetails,
    listBasicDetails,
    updateBasicDetails,
    deleteBasicDetails
} = require('../../controllers/basicDetails/basicDetailsController');


router.post('/create', createBasicDetails);
router.get(['/list', '/list/:id'], listBasicDetails);
router.patch('/update/:id', updateBasicDetails);
router.delete('/delete', deleteBasicDetails);

module.exports = router;