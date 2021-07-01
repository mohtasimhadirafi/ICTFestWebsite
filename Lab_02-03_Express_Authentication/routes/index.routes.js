const express = require('express')
const router = express.Router()

const { getHomePage } = require("../controller/authController")

router.get("/", getHomePage)

module.exports = router