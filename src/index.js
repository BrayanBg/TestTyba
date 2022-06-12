const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port=3000;

const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
delete cspDefaults['upgrade-insecure-requests'];
app.use(helmet({
    contentSecurityPolicy: { directives: cspDefaults }
}));

app.use(cors());

require('./db');

app.use(express.json());

app.use('/',routes);

app.listen(port, () => { console.log(`Escuchando en el puerto ${port}`) });

module.exports = app
