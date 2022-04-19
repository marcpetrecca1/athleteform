const mongoose = require('mongoose');

const PlayerProfile = require('../db/schema.js');

const db = mongoose.connect(PlayerProfile)
  .then(() => (console.log('successfully connect to mongo')))
  .catch((err) = (console.log(err)));

module.exports = db;
