const dotenv = require('dotenv');
dotenv.config();

const Config = {
    PORT: process.env.PORT || 8080,
    ENVIRONMENT: process.env.ENVIRONMENT || 'development',
    DATABASE_CONNECTION_STRING: process.env.DATABASE_CONNECTION_STRING || 'development'
}

module.exports = { Config };