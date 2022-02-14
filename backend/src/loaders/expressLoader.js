const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('../routes');


const init = async ({ app, db }) => {
    const corsOptions = {
        origin:[ "http://localhost:3000"],
    };

    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
  
    app.use(cors(corsOptions));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  
    app.use('', routes(db));
    return app;
};

module.exports = init;
