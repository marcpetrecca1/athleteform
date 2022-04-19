const mongoose = require('mongoose');
const PlayerProfile = require("./schema");

exports.createProfile = function(req, res) {
  console.log(req.body.image)
  return PlayerProfile.create({
    "id": new mongoose.Types.ObjectId(),
    "name": req.body.name,
    "dateOfBirth": req.body.birthday,
    "location": req.body.location,
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
  return PlayerProfile.find({})
  .then((data) => {
    console.error(data);
    res.send(data)
  })
  .catch((error) => {
    console.error(error);
    res.sendStatus(500);
  })
};