// setsups Express routes related to users and vendors

const express = require("express");
const router = express.Router();
const dpUpload = require("../middleware/profilePicStorage");
const { userLogin, userRegister, vendorLogin, vendorRegister, getSingleVendor, vendorSecretCheck, userSecretCheck, vendorPasswordReset, userPasswordReset } = require("../controller/userController");
const { updateDpVendor, deleteDpVendor, deleteDpUser, updateDpUser, renderDp } = require("../controller/profilePicController");

router.post("/vendor/register", vendorRegister);
router.post("/vendor/login", vendorLogin);
router.post("/user/register", userRegister);
router.post("/user/login", userLogin);

router.post("/vendor/secret-check", vendorSecretCheck);
router.post("/user/secret-check", userSecretCheck);

router.put("/vendor/password-reset", vendorPasswordReset);
router.put("/user/password-reset", userPasswordReset);

router.get("/vendor/:id", getSingleVendor);

router.put("/vendor/:id",deleteDpVendor, dpUpload.single("profilePic"), updateDpVendor);
router.put("/user/:id",deleteDpUser, dpUpload.single("profilePic"), updateDpUser);
router.get("/profile-images/:name", renderDp);

module.exports = router;