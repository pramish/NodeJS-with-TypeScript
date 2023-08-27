const dotenv = require('dotenv');
dotenv.config();

const Config = {
    PORT: process.env.PORT || 8080,
    ENVIRONMENT: process.env.ENVIRONMENT || 'development'
}

module.exports = { Config };