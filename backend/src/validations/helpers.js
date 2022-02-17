const validateRequestBody = function (req, res, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.body, options);
    if (error) {
        res.status(400).send({message: `Validation error: ${error.details.map(x => x.message).join(', ')}`});
    } else {
        req.body = value;
        next();
    }
};

const validateRequestQuery = function  (req, res, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    const { error, value } = schema.validate(req.query, options);
    if (error) {
        res.status(400).send({message: `Validation error: ${error.details.map(x => x.message).join(', ')}`});
    } else {
        req.body = value;
        next();
    }
}
module.exports = {
    validateRequestBody: validateRequestBody,
    validateRequestQuery: validateRequestQuery
};
