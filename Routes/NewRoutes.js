const express = require("express");
const { addNewPlayer, fetchNewPlayer,getPlayerId,singlePlayer, slider,GetSlider } = require("./controller/NewRoute");
const router = express.Router();


router.route('/').post(addNewPlayer).get(fetchNewPlayer)
router.route('/:_id').delete(getPlayerId)
router.route('/singlePlayer/:id').get(singlePlayer)
router.route('/slider').put(slider)
router.route('/getSlider').get(GetSlider)


module.exports =router;