import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";
import { useEffect } from "react";
const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    return () => {
      a.update();
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {/* using .state coz it is an object */}
      This is about {a.state.name} and he is in {a.state.year} year
    </div>
  );
};

export default About;
