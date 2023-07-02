const express = require('express');
const router = express.Router();
const {
    createBasicDetails,
    listUser,
    updateUser,
    deleteUser
} = require('../../controllers/basicDetails/basicDetailsController');


router.post('/create', createBasicDetails);
// router.get(['/list', '/list/:id'], listUser);
// router.patch('/update/:id', updateUser);
// router.delete('/delete', deleteUser);

module.exports = router;