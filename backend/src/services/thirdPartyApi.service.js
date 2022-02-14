const request = require('request');

module.exports = function (url) {
    return {
        async callOtherApi() {
            try { 
                request(url, { json: true }, (err, res, body) => {
                    if (err) { return err; }
                    console.log(body.url);
                    console.log(body.explanation);
                    console.log(res.body);
                    return res.body;
                });  
            }
            catch (error) {
                return error;
            }
        }
    };
}