const express = require('express');
const router = express.Router();
const user = require('../../controllers/user.controller');

router.use('/log', user.loginUser)
router.use('/add', user.add)

module.exports = router
