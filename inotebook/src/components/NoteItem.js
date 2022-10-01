import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam maxime optio voluptatibus voluptas accusantium debitis vel dolor itaque alias quod, nesciunt eligendi rerum veniam quaerat! Vel numquam quas consequuntur ea possimus pariatur quis debitis facere?</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
