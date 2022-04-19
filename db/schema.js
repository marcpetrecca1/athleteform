const db = require("../db/index.js");

const mongoose = require("mongoose");

const player = mongoose.Schema({
  "name": {type: String, required: true},
  "dateOfBirth": {type: Date, required: true},
  "location": {type: String, required: true},
  "team": {type: String, required: true},
  "gender": {type: String, required: true},
  "sports": {type: [String], required: true},
  "about": {type: String, required: true},
  "interests": {type: String, required: true},
  "photoImage": {type: String}
});

let PlayerProfile = mongoose.model('PlayerProfile', player);

module.exports = PlayerProfile;