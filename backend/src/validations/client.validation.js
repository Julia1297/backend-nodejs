const Joi = require('joi');
const validateRequestBody = require('./helpers');
const validateRequestParams = require('./helpers');
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
            return validateRequestBody(req,res, next, schema);
        },
        validateGetById: (req, res, next) => {
            const schema = Joi.object({
                size: Joi.required()
                .messages({
                'any.required': `Size is required .`
                })
            });
        return validateRequestQuery(req,res, next, schema);
        }
    };
  }