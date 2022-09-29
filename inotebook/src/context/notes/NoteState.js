import NoteContext from "./NoteContext";
// import { useState } from "react";
const NoteState = (props) => {
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
  return (
    <NoteContext.Provider value={{}}>{props.children}</NoteContext.Provider>
  );
};
export default NoteState;
