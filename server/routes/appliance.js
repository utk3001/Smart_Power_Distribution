
const express = require("express");
const multer = require("multer");
const {add} = require("../controllers/appliance.js");
const {edit} = require("../controllers/appliance.js");
const {getAll} = require("../controllers/appliance.js");
const router = express.Router();

router.post("/add",add);
router.post("/edit",edit);
router.get("/all",getAll);

module.exports = router;

// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "../client/src/icons")
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname + '-' + Date.now())
//     }
// });

// var upload = multer({ storage: storage });

// router.post("/add",upload.single('icon'),add);
// router.post("/edit",upload.single('icon'),edit);