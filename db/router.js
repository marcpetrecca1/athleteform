const express = require('express');
const playerRouter = express.Router();
const {createProfile, retrieveProfiles} = require('./controller.js')

playerRouter.route('/')
  .get(retrieveProfiles)
  .post(createProfile)
  .put();

module.exports = playerRouter;