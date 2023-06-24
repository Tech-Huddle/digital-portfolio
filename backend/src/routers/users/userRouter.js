const express = require('express');
const router = express.Router();
const {
    createUser,
    listUser,
    updateUser,
    deleteUser
} = require('../../controllers/users/userController');


router.post('/create', createUser);
//router.get(['/users_details', '/users_details/:id'], listUserDetails);
router.get(['/list', '/list/:id'], listUser);
router.patch('/update/:id', updateUser);
router.delete('/delete', deleteUser);

module.exports = router;