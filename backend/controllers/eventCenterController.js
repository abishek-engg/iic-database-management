const EventCenter = require("../models/eventCenterModel");
const mongoose = require("mongoose");

const getEvent = async (req, res) => {
  try {
    const event = await EventCenter.find({}).populate('event').populate('faculty');
    console.log(event);
    
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneEvent = async (req, res) => {
  const {id} = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid Object ID" });

  try {
    const event = await EventCenter.findOne({ _id: id });

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
    const event = await EventCenter.findOneAndDelete({ _id: id });

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
   faculty,
   event
  } = req.body;

  try {
    const eventCenter = await EventCenter.create({
      faculty,event
    });
    res.status(200).json(eventCenter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateEvent = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid Object ID" });

  try {
    const event = await EventCenter.findOneAndUpdate(
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
  updateEvent
};
