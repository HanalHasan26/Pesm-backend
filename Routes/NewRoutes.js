const express = require("express");
const { addNewPlayer, fetchNewPlayer,getPlayerId,singlePlayer, slider } = require("./controller/NewRoute");
const router = express.Router();


router.route('/').post(addNewPlayer).get(fetchNewPlayer)
router.route('/:_id').delete(getPlayerId)
router.route('/singlePlayer').get(singlePlayer)
router.route('/slider').get(slider)


module.exports =router;