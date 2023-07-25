const express = require("express");
const router = express.Router();
const {
  createOtherDetails,
  listOtherDetails,
  updateOtherDetails,
  deleteOtherDetails,
} = require("../../controllers/OtherDetails/OtherDetailsController");

router.post("/create", createOtherDetails);
router.get(["/list", "/list/:id"], listOtherDetails);
router.patch("/update/:id", updateOtherDetails);
router.delete("/delete", deleteOtherDetails);

module.exports = router;
