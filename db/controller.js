const mongoose = require('mongoose');
const PlayerProfile = require("./schema");

exports.createProfile = function(req, res) {
  return PlayerProfile.create({
    "name": req.body.newObject.name,
    "dateOfBirth": req.body.newObject.dateOfBirth,
    "location": req.body.newObject.location,
    "team": req.body.newObject.team,
    "gender": req.body.newObject.gender,
    "sports": req.body.newObject.sports,
    "about": req.body.newObject.about,
    "interests": req.body.newObject.interests,
    "image": req.body.newObject.image
  })
  .then(({data}) => {
    console.log('Profile created')
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
    console.log(data);
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