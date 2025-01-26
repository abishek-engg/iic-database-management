const express = require("express");
const router = express.Router();

const {
    getEvent,
    getOneEvent,
    createEvent,
    deleteEvent,
    updateEvent,
  } = require("../controllers/eventTrackerController")
  

router.get("/", getEvent);

router.get("/:id",getOneEvent);

router.post("/", createEvent);

router.delete("/",deleteEvent);

router.patch("/", updateEvent);

module.exports = router;
