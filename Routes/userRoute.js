const express = require("express");
const { append } = require("express/lib/response");
const usercontroller = require("../controller/userController");
const router = express.Router();

// const app = require("../app");

router.post("/register", usercontroller.register);
router.put("/update", usercontroller.updateuser);

module.exports = router;
