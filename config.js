'use strict';
const dotenv = require('dotenv');

dotenv.config();

const {
    DATABASE_PORT,
    HOST,
    HOST_URL,
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
} = process.env;

module.exports = {
    port: DATABASE_PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig : {
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId,
        appId: appId
    }
};