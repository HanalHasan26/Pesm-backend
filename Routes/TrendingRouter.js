const express = require("express");
const {trending, AddTrending, removeTrending} = require("./controller/NewRoute");

const router = express.Router();



router.route('/').put(AddTrending).get(trending)
router.route('/removeTrending').put(removeTrending)


module.exports =router;  