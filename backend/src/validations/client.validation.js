const Joi = require('joi');
const validateRequestBody = require('./helpers');
module.exports = function (a) {
    return {
        createClientSchema: (req, res, next) => {
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
        }
    };
  }