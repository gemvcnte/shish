const express = require("express");
const dotenv = require("dotenv");
const adminController = require("../controllers/adminController");
const authController = require("../controllers/authController");
const { userVerification } = require("../middleware/authMiddleware");
// const verifyToken = require("../middleware/authenticationMiddleware");
const verifyToken = require("../middleware/verifyToken");
dotenv.config();

const router = express.Router();

router.post("/login", authController.adminLogin);
router.post("/createAdmin", adminController.createAdmin);
router.get("/getAllAdmins", adminController.getAllAdmins);
router.delete("/admin/deleteAdmin", adminController.deleteAdmin);
router.post("/createAnnouncement", adminController.createAnnouncement);
router.get("/getAllAnnouncements", adminController.getAllAnnouncements);
router.delete("/announcement/:id", adminController.deleteAnnouncement);
router.get("/analytics/totalAdmin", adminController.totalAdminAnalytics);
router.get("/analytics/totalPosts", adminController.totalPostsOfAdminAnalytics);

//
//

module.exports = router;
