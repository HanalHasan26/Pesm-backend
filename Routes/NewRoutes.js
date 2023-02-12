const express = require("express");
const SliderHome = require("../Models/SliderModel");
const { addNewPlayer, fetchNewPlayer,getPlayerId,singlePlayer, slider } = require("./controller/NewRoute");
const router = express.Router();


router.route('/').post(addNewPlayer).get(fetchNewPlayer)
router.route('/:_id').delete(getPlayerId)
router.route('/singlePlayer/:id').get(singlePlayer)
router.route('/slider').put(slider)
router.route('/SliderHome').put(SliderHome)


module.exports =router;