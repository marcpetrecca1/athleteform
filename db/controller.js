const mongoose = require('mongoose');
const PlayerProfile = require("./schema");

exports.createProfile = function(req, res) {
  return PlayerProfile.create({
    "name": req.body.name,
    "dateOfBirth": req.body.dateOfBirth,
    "location": req.body.location,
    "team": req.body.team,
    "gender": req.body.gender,
    "sports": req.body.sports,
    "about": req.body.about,
    "interests": req.body.interests,
    "photoImage": req.body.image
  })
  .then((data) => {
    console.log('Profile created')
    console.log(data)
    res.status(201).json(data);
  })
  .catch((error) => {
    console.log(error);
    res.send(error);
  })
};

exports.retrieveProfiles = function(req, res) {
  return PlayerProfile.find({}).limit(5)
  .then((data) => {
    console.error(data);
    res.send(data)
  })
  .catch((error) => {
    console.error(error);
    res.sendStatus(500);
  })
};

exports.deleteDatabase = function(req, res) {
  return PlayerProfile.collection.drop()
  .then(() => {
    res.sendStatus(202)
  })
  .catch((error) => {
    res.sendStatus(404)
  })
}