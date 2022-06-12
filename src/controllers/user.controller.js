const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const envior = require('../config');
const User = require('../db/models/user.model');
const loginSchema = require('../db/schemas/login.schema');
const userValidation = require('../db/schemas/user.schema');

const Users = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } 
    catch (err) { 
        res.status(500).json(`Error: ${err}`);
    }  
}

const loginUser = async (req, res) => {
    try{
        const {email , pass} = await loginSchema.validateAsync(req.body);
        let validate = await User.findOne({email});
        if(validate==null){
            res.status(404).json('NOT FOUND');
        }
        else{
            const {email: emails, password: passw, name, lastname} = validate;
            validate = bcrypt.compareSync(pass, passw);
            if(validate) {
                const token = jwt.sign({email: emails,name,lastname},envior.passToken);
                res.json(token);
            }
            else{
                res.status(400).json('INVALID CREDENTIALS');
            }
        }
     }
     catch(err){
        res.status(500).json(`Error: ${err}`);
     } 
}

const add = async (req, res) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const {email} = await userValidation.validateAsync(req.body);
        let validate = await User.findOne({email});
        if(validate){
            res.status(400).json('Email Existing');
        }
        else{
            let user = req.body;
            user.password = bcrypt.hashSync(user.password, salt);
            const aux = new User(user);
            await aux.save();
            user = await User.findOne({email});
            let resul = {
                name: user.name,
                lastname: user.lastname,
                direction: user.direction,
                email: user.email
            }
            res.status(201).json(resul);
        }
    }
    catch(err){
        res.status(500).json(`Error: ${err}`);
    }     
}

const get = async (req, res) => {
    let users = await User.find();
    res.json(users);
}

module.exports = { Users, add, loginUser, get }
