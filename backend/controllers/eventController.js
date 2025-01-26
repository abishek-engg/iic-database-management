const Event = require("../models/eventModel");
const mongoose = require("mongoose");

const getEvent = async (req, res) => {
  try {
    const event = await Event.find({});
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
    const event = await Event.findOne({ _id: id });

    if (!event) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneEventByName = async (req, res) => {
  const name = req.params.id;

  console.log(name);

  try {
    const event = await Event.find({ eventTitle: { $regex: `^${name}`, $options: 'i' } });    

    if (event.length === 0) {
      return res.status(404).json({ error: "No faculties found" });
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
    const event = await Event.findOneAndDelete({ _id: id });

    if (!event) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createEvent = async (req, res) => {
  const {
    eventCode,
    eventTitle,
    eventCategory,
    startDate,
    endDate,
    duration,
    modeOfParticipation,
    eventStatus,
  } = req.body;

  try {
    const event = await Event.create({
      eventCode,
      eventTitle,
      eventCategory,
      startDate,
      endDate,
      duration,
      modeOfParticipation,
      eventStatus,
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid Object ID" });

  try {
    const event = await Event.findOneAndUpdate(
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
  getOneEventByName,
  createEvent,
  deleteEvent,
  updateEvent,
};
