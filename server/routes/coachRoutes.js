const express = require("express");

const router = express.Router();

const {
    addCoach,
    getAllCoaches,
    updateCoach,
    deleteCoach
} = require("../controllers/coachController");

router.post("/add", addCoach);
router.get("/all", getAllCoaches);
router.put("/update/:id", updateCoach);
router.delete("/delete/:id", deleteCoach);

module.exports = router;