import React from "react";
import NoteItem from "./NoteItem";
import { connect } from "react-redux";

const NoteList = (props) => {
  return (
    <div>
      {props.notes.map((note) => (
        <NoteItem key={note.id} note={note}></NoteItem>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return { notes: state.notes };
}

export default connect(mapStateToProps)(NoteList);
