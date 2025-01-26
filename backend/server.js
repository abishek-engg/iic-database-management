const express = require("express");
const app = express();
const cors = require('cors')

const mongoose = require("mongoose");

const eventRoute = require("./routes/eventRoute");
const eventCenterRoute = require("./routes/eventCenterRoute");
const eventTrackerRoute = require("./routes/eventTrackerRoute");
const facultyRoute = require("./routes/facultyRoute");

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  next();
});

app.use("/api/events", eventRoute);
app.use("/api/faculty", facultyRoute);
app.use("/api/eventCenter", eventCenterRoute);
app.use("/api/eventTracker",eventTrackerRoute );


mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    app.listen(6969, () => {
      console.log("Connected to DB \nListening on port 6969");
    });
  })
  .catch((err) => {
    console.log(err);
  });
