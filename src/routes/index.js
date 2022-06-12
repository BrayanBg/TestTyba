const express = require('express');
const { expressjwt: jwt } = require('express-jwt');
const envior = require('../config');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('../utils/swaggerO');
const account = require('./account');
const middle = require('../middlewares/registerTransactions.middleware');
const action = require('./functions');

const swaggerSpecs = swaggerJsDoc(swaggerOptions);

const router = express();

router.use('/api', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

router.use(middle.registerTransaction);

router.use('/account',account);

router.use(jwt({
    secret: envior.passToken,
    algorithms: ['HS256']
}));

router.use('/action', action);

module.exports = router