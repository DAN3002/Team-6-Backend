const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    DATABASE_PORT,
    HOST,
    HOST_URL,
} = process.env;

assert(DATABASE_PORT, 'PORT must be');
assert(HOST, 'HOST must be');