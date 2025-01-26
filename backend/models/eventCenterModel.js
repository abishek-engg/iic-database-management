const mongoose = require("mongoose");

const eventCenterSchema = new mongoose.Schema({

  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Faculty", 
    required: true,
  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  }
});

const EventCenter = mongoose.model("eventCenter", eventCenterSchema);

module.exports = EventCenter;
