const EventTracker = require("../models/eventTrackerModel");
const mongoose = require("mongoose");

const getEvent = async (req, res) => {
  try {
    const event = await EventTracker.find({}).populate("faculty").populate("event")
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneEvent = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid Object ID" });

  try {
    const event = await EventTracker.findOne({ eventID: id });

    if (!event) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteEvent = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid Object ID" });

  try {
    const event = await EventTracker.findOneAndDelete({ _id: id });

    if (!event) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createEvent = async (req, res) => {
  console.log(req.body);
  
  const { facultyID, eventID } = req.body;
  const faculty = facultyID
  const event = eventID

  try {
    const eventTracker = await EventTracker.create({
      faculty,
      event,
    });
    res.status(200).json(eventTracker);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid Object ID" });

  try {
    const event = await EventTracker.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!event) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEvent,
  getOneEvent,
  createEvent,
  deleteEvent,
  updateEvent,
};
