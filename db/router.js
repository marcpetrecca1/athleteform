const express = require('express');
const playerRouter = express.Router();
const {createProfile, retrieveProfiles, deleteDatabase} = require('./controller.js')

playerRouter.route('/')
  .get(retrieveProfiles)
  .post(createProfile)
  .delete(deleteDatabase)
  .put();

module.exports = playerRouter;