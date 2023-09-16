const express = require('express');
const router = express.Router();
const {
    createtechnical_skill,
    listtechnical_skill,
    updatetechnical_skill,
    deletetechnical_skill
} = require('../../controllers/technical_skill/technical_skill');


router.post('/create', createtechnical_skill);
router.get(['/list', '/list/:id'], listtechnical_skill);
router.patch('/update/:id', updatetechnical_skill);
router.delete('/delete', deletetechnical_skill);

module.exports = router;