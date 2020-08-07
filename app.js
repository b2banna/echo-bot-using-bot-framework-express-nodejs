const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

module.exports.app = express();

this.app.use(morgan('common'));
this.app.use(cors());

const routes = require('./routes');
routes.init(this.app);
