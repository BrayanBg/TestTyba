const joi = require('joi');

const loginSchema = joi.object({
    email: joi
            .string()
            .email({
                minDomainSegments: 2
            }),
    pass: joi
        .string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

module.exports = loginSchema
