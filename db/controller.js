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
    "image": req.body.image
  })
  .then(({data}) => {
    console.log('Profile created')
    res.status(201).json(data);
  })
  .catch((error) => {
    res.status(400).send(error);
  })
};

exports.retrieveProfiles = function(req, res) {
  return PlayerProfile.find({}).limit(20)
  .then((data) => {
    res.status(200).json(data);
  })
  .catch((error) => {
    res.status(400).send(error);
  })
};

exports.deleteDatabase = function(req, res) {
  return PlayerProfile.collection.drop()
  .then(() => {
    res.sendStatus(202);
  })
  .catch((error) => {
    res.sendStatus(404);
  })
}