const express = require("express");
const router = express.Router();
const doubtModel = require("../models/doubts");
const answerModel = require("../models/answers");

router.get("/", async (req, res) => {
  try {
    const response = await doubtModel.find({});
    res.json(response);
  } catch (err) {
    console.error(err);
  }
});

router.post("/", async (req, res) => {
  const newDoubt = new doubtModel(req.body);
  await newDoubt.save();

  res.json({ message: "New doubt created Successfully!" });
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await doubtModel.findById(id);
    res.json(response);
  } catch (err) {
    console.error(err);
  }
});

module.exports.DoubtRouter = router;
