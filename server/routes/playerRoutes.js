const express = require("express");

const router = express.Router();

const {
    addPlayer,
    getAllPlayers,
    updatePlayer,
    deletePlayer
} = require("../controllers/playerController");

router.post("/add", addPlayer);
router.get("/all", getAllPlayers);
router.put("/update/:id", updatePlayer);
router.delete("/delete/:id", deletePlayer);

module.exports = router;
