const Faculty = require("../models/facultyModel");
const mongoose = require("mongoose");

const getFaculty = async (req, res) => {
  try {
    const faculty = await Faculty.find({});
    res.status(200).json(faculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneFaculty = async (req, res) => {
  const id = req.params.id;

  console.log(id);

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid Object ID" });

  try {
    const faculty = await Faculty.findOne({ _id: id });

    if (!faculty) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json(faculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getOneFacultyByName = async (req, res) => {
  const name = req.params.id;

  console.log(name);

  try {
    const faculty = await Faculty.find({
      facultyName: { $regex: `^${name}`, $options: "i" },
    });

    if (faculty.length === 0) {
      return res.status(404).json({ error: "No faculties found" });
    }

    res.status(200).json(faculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFaculty = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid Object ID" });

  try {
    const faculty = await Faculty.findOneAndDelete({ _id: id });

    if (!faculty) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json(faculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createFaculty = async (req, res) => {
  const { facultyName, facultyCode, department, username, password, role } =
    req.body;

  console.log(req.body);

  try {
    const faculty = await Faculty.create({
      facultyName,
      facultyCode,
      department,
      username,
      password,
      role,
    });
    res.status(200).json(faculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateFaculty = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Invalid Object ID" });

  try {
    const faculty = await Faculty.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!faculty) {
      return res.status(404).json({ error: "Not Found" });
    }

    res.status(200).json(faculty);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const authFaculty = async (req, res) => {
  const { username, password } = req.body;

  try {
    const faculty = await Faculty.findOne({ username: username });

    if (!faculty) {
      return res.status(404).json({ error: "User Not Found" });
    }
    if (password === faculty.password) res.status(200).json(faculty);
    else res.status(400).json({error:"Invalid Credentials"})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFaculty,
  getOneFaculty,
  getOneFacultyByName,
  createFaculty,
  deleteFaculty,
  updateFaculty,
  authFaculty,
};
