const Transaction = require('../db/models/transaction.model');
const envior = require('../config');
const jwt = require('jsonwebtoken');

const Transactions = async (req, res) => {
    try {
        const transaction = await transaction.find();
        res.json(transaction);
    } 
    catch (err) { 
        res.status(500).json(`Error: ${err}`);
    }  
}

const add = async (req, res) => {
    try{
        const authHeader = req.rawHeaders[9];
        const split = authHeader.split(' ');
        let token = split[1];
        let decoded = jwt.verify(token, envior.passToken);
        let email = typeof req.body?.email ? decoded.email : req.body.email;
        let extra = {
            email: email,
            date: new Date().toLocaleString(),
            description: req.originalUrl
        }
        const aux  = new Transaction(extra);
        await aux.save();
    }
    catch (err){
       console.log(err);
    }
}

const get = async (req, res) => {
    let transactions = await Transaction.find();
    res.json(transactions);
}

module.exports = { Transactions, add, get }
