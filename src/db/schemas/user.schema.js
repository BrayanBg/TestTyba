const joi = require('joi');

const userValidation = joi.object({
    name: joi
            .string()
            .min(3)
            .required(),
    lastname: joi
            .string()
            .min(3)
            .required(),
    direction: joi
            .string()
            .required(),
    password: joi
            .string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
    email: joi
            .string()
            .email({
                minDomainSegments: 2
            })
            .required(),
    isAdmin: joi.boolean()
});

module.exports = userValidation
