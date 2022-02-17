const Joi = require('joi');
const validateTypes = require('./helpers');
module.exports = function () {
    return {
        validateCreateClient: (req, res, next) => {
            const schema = Joi.object().keys({
                client: {
                    name: Joi.required()
                    .messages({
                    'any.required': `Name is a required field.`
                    }),
                    ci: Joi.required()
                    .messages({
                    'any.required': `Ci is a required field.`
                    })
                }
            });
            return validateTypes.validateRequestBody(req, res, next, schema);
        },
        
        validateGetById: (req, res, next) => {
            const schema = Joi.object({
                size: Joi.required()
                .messages({
                'any.required': `Size is required .`
                })
            });
            return validateTypes.validateRequestQuery(req, res, next, schema);
        }
    };
}