const mongoose = require('mongoose');
const envior = require('../config');

(async () => {
    await mongoose.connect(`mongodb+srv://${envior.DB_USER}:${envior.DB_PASS}@${envior.HOST}/${envior.DB_NAME}?retryWrites=true&w=majority`,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log('conectado a la BD de mongo');
}
)();
