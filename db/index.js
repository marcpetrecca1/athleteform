const mongoose = require("mongoose");
mongoose.promise = Promise;

const PlayerProfile = "mongodb://localhost/";

const db = mongoose.connect(PlayerProfile)
  .then((data) => (console.log('successfully connect to mongo')))
  .catch((error) => (console.log(error)));

module.exports = db;
