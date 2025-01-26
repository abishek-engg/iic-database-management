const mongoose = require("mongoose");
const Event = require("../models/eventModel");
const Faculty = require("../models/facultyModel");


const eventTrackerSchema = new mongoose.Schema({

  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty", // Reference to Faculty collection
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event", // Reference to event collection
    required: true,
  },
  approval:{
    type:String,
    required:true,
    default:"Initiated"
  },
  remarks:{
    type:String,
    required:true,
    default:"-"
  }
});

const EventTracker = mongoose.model("eventTracker", eventTrackerSchema);

module.exports = EventTracker;
