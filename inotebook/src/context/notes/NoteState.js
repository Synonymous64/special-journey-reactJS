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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxOGJhZGNhN2FkY2YxMTcxMmU4ZGU5In0sImlhdCI6MTY2MjY1ODYxMX0.g-YciCOg11MIj3onS8jiebau9XIt9t1jj8SvgS0mmQM",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //* Add a note
  const addNote = async (title, description, tag) => {
    //TODO API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxOGJhZGNhN2FkY2YxMTcxMmU4ZGU5In0sImlhdCI6MTY2MjY1ODYxMX0.g-YciCOg11MIj3onS8jiebau9XIt9t1jj8SvgS0mmQM",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects

    console.log("adding a new Note");
    let note = {
      _id: "631f53f1c5b7d30b86ec1f63",
      user: "6318badca7adcf11712e8de91",
      title: title,
      description: description,
      tag: "General",
      date: "2022-09-12T15:44:49.056Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //* Delete a note
  const deleteNote = (id) => {
    //TODO API CALL
    console.log("The note is deleted " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //* Edit a note
  const editNote = async (id, title, description, tag) => {
    //* API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMxOGJhZGNhN2FkY2YxMTcxMmU4ZGU5In0sImlhdCI6MTY2MjY1ODYxMX0.g-YciCOg11MIj3onS8jiebau9XIt9t1jj8SvgS0mmQM",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects

    //* Logic to edit in client
    for (let i = 0; i < notes.length; ++i) {
      let element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
