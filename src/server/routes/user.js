const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");


router.get("/leaderboard", auth, userCtrl.getLeaderboard)
router.get("/user-infos", auth, userCtrl.getUserInfos)

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.post('/color', userCtrl.color);
router.post('/bonus-leaves' userCtrl.bonusLeaves)

module.exports = router;
