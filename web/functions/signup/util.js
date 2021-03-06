/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
//@ts-check

const { GoogleSpreadsheet } = require('google-spreadsheet');
require('isomorphic-fetch');

exports.response = (code, message) => ({
  statusCode: code,
  body: !!message ? JSON.stringify({ message }) : undefined,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Max-Age': 2592000,
    'Access-Control-Allow-Credentials': true,
  },
});

exports.setup = (...params) => {
  if (!process.env.NETLIFY) require('dotenv').config();

  function error(key) {
    console.error(`no ${key} env var set`);

    const error = new Error(`invalid server-side configuration`);
    error.stack = '';
    throw error;
  }

  params.forEach(p => !process.env[p] && error(p));
};

exports.loadDoc = async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID_FROM_URL);
  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  });
  await doc.loadInfo();

  return doc;
};

exports.sanitizeString = s => s.toString().replace(/[^a-zA-Z0-9\s]/g, '');
