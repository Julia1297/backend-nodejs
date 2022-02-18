const Joi = require('joi');
const validateTypes = require('./helpers');
module.exports = function () {
    return {
        validateCreateClient: (req, res, next) => {
            const schema = Joi.object({
                client: Joi.required()
                .messages({
                'any.required': `Client is a required field.`
                })
            }).keys({
                client:{
                    name: Joi.string()
                    .required()
                    .min(2)
                    .messages({
                        'string.base': `"Name" should be a type of 'text'`,
                        'string.empty': `"Name" cannot be an empty field`,
                        'string.min': `"Name" should have a minimum length of {#limit}`,
                        'any.required': `"Name" is a required field.`
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