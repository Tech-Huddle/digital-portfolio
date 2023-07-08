const express = require('express');
const router = express.Router();
const {
    createEducationDetails,
    listEducationDetails,
    updateEducationDetails,
    deleteEducationDetails
} = require('../../controllers/educationDetails/educationDetailsController');


router.post('/create', createEducationDetails);
router.get(['/list', '/list/:id'], listEducationDetails);
router.patch('/update/:id', updateEducationDetails);
router.delete('/delete', deleteEducationDetails);

module.exports = router;