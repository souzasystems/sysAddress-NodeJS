const express    = require('express');
const consign    = require('consign');
const bodyParser = require('body-parser');

const sysAddress = express();

sysAddress.set('view engine', 'ejs');
sysAddress.set('views', './sysAddress/views');

sysAddress.use(express.static('./sysAddress/public'));
sysAddress.use(bodyParser.urlencoded({ extended: true }));
sysAddress.use(bodyParser.json());

consign()
    .include('sysAddress/routes')
    .then('config/dbConfig.js')
    .then('sysAddress/models')
    .then('sysAddress/controllers')
    .into(sysAddress);

module.exports = sysAddress;