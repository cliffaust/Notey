import React from "react";
import { deleteNote, showModalValue } from "../actions/noteActions";
import { connect } from "react-redux";
import UpdateNote from "./UpdateNote";

const NoteItem = (props) => {
  return (
    <div className="note-items">
      <h3 className="title">{props.note.title}</h3>
      <h3 className="date">{props.note.date}</h3>
      <h3 className="text">{props.note.note}</h3>
      <div className="btn-box">
        <button
          className="update-btn"
          onClick={() => {
            props.showModalValue(true);
          }}
        >
          Update
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            props.deleteNote(props.note);
          }}
        >
          Delete
        </button>
      </div>
      <UpdateNote note={props.note}></UpdateNote>
    </div>
  );
};

const mapDispatchToProps = {
  deleteNote: deleteNote,
  showModalValue: showModalValue,
};

export default connect(null, mapDispatchToProps)(NoteItem);
