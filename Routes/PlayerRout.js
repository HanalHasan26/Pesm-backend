const express = require("express");
const { DeclinePlayer, fetchAllPlyers, fetchStanderdPlayers, fetchLegenderyPlayers, fetchFeaturedPlayers, fetchEpicPlayers } = require("./controller/PlayerController");
const router = express.Router();

router.route('/').post(DeclinePlayer).get(fetchAllPlyers)  
router.route('/standerd').get(fetchStanderdPlayers) 
router.route('/Legend').get(fetchLegenderyPlayers)
router.route('/Featured').get(fetchFeaturedPlayers) 
router.route('/Epic').get(fetchEpicPlayers)

module.exports =router;