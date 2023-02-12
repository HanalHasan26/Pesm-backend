const express = require("express");
const { addNewPlayer, fetchNewPlayer } = require("./controller/NewRoute");
const router = express.Router();


router.route('/').post(addNewPlayer).get(fetchNewPlayer)


module.exports =router;