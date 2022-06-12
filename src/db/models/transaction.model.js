const { required } = require('joi');
const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('transaction', transactionSchema);