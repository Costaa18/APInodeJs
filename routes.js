const express = require("express");
const router = express.Router();
const qrcode = require("./rotas/qrcode");
const tracking = require("./rotas/tracking");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/addup_qr", upload.single("logo"), qrcode.createQRCode);

router.get("/addup_qr_track/:tracking_id", tracking.trackingQRCode);

module.exports = router;
