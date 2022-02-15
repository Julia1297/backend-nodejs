const axios = require('axios');

module.exports = function (url) {
    return {
        async callOtherApi() {
            try {
                const responseRequest = await axios.get(url)
                return responseRequest.data;
            } catch (err) {
                throw new Error('Error request with third api.')
            }           
        }
    };
}