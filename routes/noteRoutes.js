const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

// ADD NOTE
router.post("/", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); // 🔍 DEBUG

    const note = new Note({
      title: req.body.title,
      content: req.body.content, // 👈 MUST EXIST
    });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// GET NOTES
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE NOTE
router.delete("/:id", async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
