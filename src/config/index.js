const dotenv = require('dotenv');

dotenv.config();
const envior = {
    HOST: process.env.HOST,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
    passToken: process.env.passToken,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    MAPS_GOOGLE_KEY: process.env.MAPS_GOOGLE_KEY
};

module.exports =  envior 
