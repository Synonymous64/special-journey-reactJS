import React from "react";
import NoteContext from "../context/notes/NoteContext";
import { useContext, useState } from "react";
const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "default" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="add a title"
            onChange={onChange}
            name="title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            onChange={onChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          add a note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
