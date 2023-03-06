'use strict';
const dotenv = require('dotenv');
const assert = require('assert');
dotenv.config();

const {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    type,
    project_id,
    private_key_id,
    client_email,
    client_id,
    auth_uri,
    token_uri,
    auth_provider_x509_cert_url,
    client_x509_cert_url
} = process.env;


module.exports = {
    firebaseConfig: {
        apiKey: apiKey,
        authDomain: authDomain,
        projectId: projectId,
        storageBucket: storageBucket,
        messagingSenderId: messagingSenderId,
        appId: appId
    },

    type: type,
    project_id: project_id,
    private_key_id: private_key_id,
    client_email: client_email,
    client_id: client_id,
    auth_uri: auth_uri,
    token_uri: token_uri,
    auth_provider_x509_cert_url: auth_provider_x509_cert_url,
    client_x509_cert_url: client_x509_cert_url

};