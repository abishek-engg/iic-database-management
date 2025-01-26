const express = require("express");
const router = express.Router();

const {getFaculty,getOneFaculty,getOneFacultyByName,createFaculty,deleteFaculty,updateFaculty,authFaculty} = require("../controllers/facultyController");

router.get("/", getFaculty);

router.get("/:id",getOneFaculty);

router.get("/name/:id",getOneFacultyByName);

router.post("/auth",authFaculty);

router.post("/",createFaculty);

router.delete("/:id",deleteFaculty);

router.patch("/:id",updateFaculty);


router.patch("/", (req, res) => {
  res.json({ mssg: "hii" });
});

module.exports = router;
