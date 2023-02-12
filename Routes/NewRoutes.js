const express = require("express");
const { addNewPlayer, fetchNewPlayer,getPlayerId } = require("./controller/NewRoute");
const router = express.Router();


router.route('/').post(addNewPlayer).get(fetchNewPlayer)
router.route('/:_id').delete(getPlayerId)


module.exports =router;