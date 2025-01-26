const express = require("express");
const router = express.Router();

const {
    getEvent,
    getOneEvent,
    getOneEventByName,
    createEvent,
    deleteEvent,
    updateEvent,
  } = require("../controllers/eventController")
  

router.get("/", getEvent);

router.get("/:id",getOneEvent);

router.get("/name/:id",getOneEventByName);


router.post("/", createEvent);

router.delete("/",deleteEvent);

router.patch("/", updateEvent);

module.exports = router;
