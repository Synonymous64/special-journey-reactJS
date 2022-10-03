import NoteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "631b7e1b6367598f80576756",
      user: "6318badca7adcf11712e8de9",
      title: "My Unicorn",
      description: "This is our sample description",
      tag: "General",
      date: "2022-09-09T17:55:39.241Z",
      __v: 0,
    },
    {
      _id: "631f53f1c5b7d30b86ec1f61",
      user: "6318badca7adcf11712e8de91",
      title: "New Note",
      description: "This is really working so well",
      tag: "General",
      date: "2022-09-12T15:44:49.056Z",
      __v: 0,
    },
    {
      _id: "631f53f1c5b7d30b86ec1f62",
      user: "6318badca7adcf11712e8de91",
      title: "New Note",
      description: "This is really working so well",
      tag: "General",
      date: "2022-09-12T15:44:49.056Z",
      __v: 0,
    },
    {
      _id: "631f53f1c5b7d30b86ec1f63",
      user: "6318badca7adcf11712e8de91",
      title: "New Note",
      description: "This is really working so well",
      tag: "General",
      date: "2022-09-12T15:44:49.056Z",
      __v: 0,
    },
  ];
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
  //* Add a note
  const addNote = (title, description, tag) => {
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
  const deleteNote = () => {};
  //* Edit a note
  const editNote = () => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
