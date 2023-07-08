const express = require('express');
const router = express.Router();
const {
    createExperience,
    listExperience,
    updateExperience,
    deleteExperience
} = require('../../controllers/experience/experienceController');


router.post('/create', createExperience);
router.get(['/list', '/list/:id'], listExperience);
router.patch('/update/:id', updateExperience);
router.delete('/delete', deleteExperience);

module.exports = router;