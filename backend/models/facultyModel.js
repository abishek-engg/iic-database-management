const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  facultyName: {
    type: String,
    required: true,
  },
  facultyCode: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  }
});


const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
