const express = require('express');
const playerRouter = express.Router();
const {createProfile, retrieveProfiles, deleteDatabase} = require('./controller.js')

playerRouter.route('/')
  .get(retrieveProfiles)
  .post(createProfile)
  .delete(deleteDatabase)

module.exports = playerRouter;