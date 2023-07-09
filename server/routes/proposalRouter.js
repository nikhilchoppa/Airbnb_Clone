// setsups Express routes related to proposals
// This object can then be used to handle routing to different paths in your application.

require("dotenv").config();
const router = require("express").Router();
const deleteBeforeUpdate = require("../middleware/deleteBeforeUpdate");
const { getAllProposals, getVendorProposals, addNewProposal, deleteProposal, renderImage, editProposal, getSingleProposal, getSelectedProposals } = require("../controller/proposalController");
const upload = require("../middleware/proposalImageStorage");
const vendorAuthentication = require("../middleware/vendorAuthentication");

router.get("/", getAllProposals);
router.get("/:id",getSingleProposal);
router.get("/selected/:id", getSelectedProposals);
router.get("/vendor/:id", vendorAuthentication, getVendorProposals);
router.post("/",vendorAuthentication, upload.array("images"), addNewProposal);
router.put("/:id",vendorAuthentication, upload.array("images"), deleteBeforeUpdate, editProposal);
router.delete("/:id",vendorAuthentication, deleteProposal);
router.get("/images/:name", renderImage);

module.exports = router;