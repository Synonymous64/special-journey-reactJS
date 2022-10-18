import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:3001";
  const notesInitial = [];
  // const s1 = {
  //   name: "Prajwal",
  //   year: "3rd",
  // };
  // const [state, setState] = useState(s1);
  // const update = () => {
  //   setTimeout(() => {
  //     setState({
  //       name: "Prajwal-Senior",
  //       year: "4th",
  //     });
  //   }, 1000);
  // };
  const [notes, setNotes] = useState(notesInitial);
  //* Get all Notes
  const getNotes = async () => {
    //TODO API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };
  //* Add a note
  const addNote = async (title, description, tag) => {
    //TODO API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const note = await response.json(); // parses JSON response into native JavaScript objects
    // console.log("adding a new Note");
    setNotes(notes.concat(note));
  };
  //* Delete a note
  const deleteNote = async (id) => {
    //TODO API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
    // console.log(json);
    // console.log("The note is deleted " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //* Edit a note
  const editNote = async (id, title, description, tag) => {
    //* API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    // console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //* Logic to edit in client
    for (let i = 0; i < newNotes.length; ++i) {
      let element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
