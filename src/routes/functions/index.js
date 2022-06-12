const express = require('express');
const trans = require('../../controllers/transaction.controller');
const rest = require('./impl/restaurants');
const router = express.Router();
router.use('/restaurants', rest.get)
router.use('/transaction', trans.get)

module.exports = router
