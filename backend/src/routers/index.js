const express = require('express');
const router = express.Router();

const userRouter = require('./users/userRouter');
const basicDetailsRouter = require('./basicDetails/basicDetailsRouter');
const experienceRouter = require('./experience/experiencRouter');
const educationDetailsRouter = require('./educationDetails/educationDetailsRouter');
const adminRouter = require('./admin/adminRouter');
const otherDetails = require('./OtherDetails/OtherDetailsRouter');
const cvDetails = require('./cv/cvRouter');
const technicalSkill = require('./technical_skill/technical_skill');
const certification=require('./certification/certification');
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Session');
    res.header('Access-Control-Allow-Headers', 'Authorization');
    res.header('Access-Control-Allow-Headers', 'Accesstoken');
    res.header('Access-Control-Allow-Headers', 'language');
    next();
});

router.use('/users', userRouter);
router.use('/basicDetails', basicDetailsRouter);
router.use('/experience', experienceRouter);
router.use('/educationDetails', educationDetailsRouter);
router.use('/admin', adminRouter);
router.use('/otherDetails', otherDetails);
router.use('/cv', cvDetails);
router.use('/technicalSkill',technicalSkill);
router.use('/certification',certification);



module.exports = router;