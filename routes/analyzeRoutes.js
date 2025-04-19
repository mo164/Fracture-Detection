const express = require("express");
const multer = require("multer");
const router = express.Router();
const analyzeController = require("../controllers/analyzeController");
const upload = multer({ dest: "uploads/" });
router.post("/", upload.single("xray"), analyzeController.analyzeImage);
module.exports = router;
