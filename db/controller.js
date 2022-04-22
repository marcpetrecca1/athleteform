const mongoose = require('mongoose');
const PlayerProfile = require("./schema");

exports.createProfile = function(req, res) {
  console.log("this is the req:", req);
  return PlayerProfile.create({
    "name": req.params.name,
    "dateOfBirth": req.params.dateOfBirth,
    "location": req.params.location,
    "team": req.params.team,
    "gender": req.params.gender,
    "sports": req.params.sports,
    "about": req.params.about,
    "interests": req.params.interests,
    "photoImage": req.params.image
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