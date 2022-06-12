const transaction = require('../controllers/transaction.controller');

const registerTransaction = async (req, res, next) => {
   await transaction.add(req,res);
   return next();
}

module.exports = {registerTransaction}