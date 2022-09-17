const express = require("express");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Notes");
const { body, validationResult } = require("express-validator");

//! Route 1 -> Get All the Notes using GET: "/api/notes/fetchallnotes". Login Required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ error: "Internal Server Error :/" });
  }
});

//! Route 2 -> Add a new Note using POST: "/api/notes/addnote". Login Required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "enter a valid title").isLength({ min: 3 }),
    body("description", "Description must be aleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;
      //! If there are errors return bad request and the error
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).send({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error.message);
      res.status(400).send({ error: "Internal Server Error :/" });
    }
  }
);
//! Route 3 -> Add a new Note using Patch: "/api/notes/updatenote". Login Required
/*
Patch provide more scalability
I used PATCH request in this project instead of PUT because : 
1. PATCH as it name says, it updates only the data which we changed and doesn't sends whole payload.
2. PUT sends the whole body payload and pastes into the DB which might not be good for overall performance of the API when scaled it.
Let's understand it with an example.
There's a box of 3 colors RGB and say you want to replace red with white so you'll just replace that red bottle, right? So that's what PATCH does that it only updates that specific field by sending over the network. But PUT will change whole box with a new box with WGB colors which may increase the stress on network due to complete payload body if there's a heavy JSON transferred.
If I said anything wrong then please free to correct me and add more to this topic 😊
*/
router.patch("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  //* create a newNote object
  const newNote = {};
  if (title) newNote.title = title;
  if (description) newNote.description = description;
  if (tag) newNote.tag = tag;
  //* Find the note to be updated
  let note = await Note.findById(req.params.id); //! this will be the id which you want to update
  if (!note) return res.status(404).send({ error: "not found :/" });
  if (note.user.toString() !== req.user.id) {
    return res.status(401).send("Not Allowed :/");
  }
  note = await Note.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({ note });
});
//! Route 3 -> Add a new Note using DELETE: "/api/notes/deletenote". Login Required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //* Find the note to be updated and delete it
    let note = await Note.findById(req.params.id); //! this will be the id which you want to update
    if (!note) return res.status(404).send({ error: "not found :/" });

    //* Allow deletion only if user owns this Note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed :/");
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Sucess: "Note has been deleted", note: note });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send("Internal server error :/");
  }
});
module.exports = router;
