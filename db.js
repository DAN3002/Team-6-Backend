const admin = require('firebase-admin');
const config = require('./config');
const dotenv = require('dotenv');

const serviceAccount = {
  "type": config.type,
  "project_id": config.project_id,
  "private_key_id": config.private_key_id,
  private_key: process.env.private_key
  ? process.env.private_key.replace(/\\n/gm, "\n")
  : undefined,
  "client_email": config.client_email,
  "client_id": config.client_id,
  "auth_uri": config.auth_uri,
  "token_uri": config.token_uri,
  "auth_provider_x509_cert_url": config.auth_provider_x509_cert_url,
  "client_x509_cert_url": config.client_x509_cert_url

};


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.databaseURL
});

module.exports = admin;




