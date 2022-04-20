const mongoose = require("mongoose");
const config = require('./config.js');
mongoose.promise = Promise;

const PlayerProfile = config.info;

const db = mongoose.connect(PlayerProfile)
  .then((data) => (console.log('successfully connect to mongo')))
  .catch((error) => (console.log(error)));

module.exports = db;
