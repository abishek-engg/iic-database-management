const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    eventCode: {
      type: String,
      required: true,
    },
    eventTitle: {
      type: String,
      required: true,
    },
    eventCategory: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    modeOfParticipation: {
      type: String,
      required: true,
    },
    eventStatus: {
      type: String,
      required: true,
    },
  }
);


const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

