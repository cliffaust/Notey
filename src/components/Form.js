import { React, useState } from "react";

import { addNote } from "../actions/noteActions";
import { connect } from "react-redux";

const Form = (props) => {
  const [state, setState] = useState({
    title: "",
    date: "",
    note: "",
  });

  function handleonChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleonSubmit() {
    let userId = Math.floor(100 + Math.random() * 10000000);
    let user = { ...state, id: userId };
    console.log(user);
    props.addNewNote(user);
  }
  return (
    <div className="form-container">
      <input
        type="text"
        onChange={handleonChange}
        name="title"
        className="input"
        value={state.title}
        placeholder="Title"
      />
      <input
        type="date"
        onChange={handleonChange}
        value={state.date}
        name="date"
        className="input"
        placeholder="Date"
      />
      <textarea
        value={state.note}
        onChange={handleonChange}
        id=""
        cols="30"
        rows="10"
        name="note"
        className="input text-area"
        placeholder="Note"
      ></textarea>
      <button onClick={handleonSubmit} className="btn">
        Add Note
      </button>
    </div>
  );
};

const mapDispatchToProps = { addNewNote: addNote };

export default connect(null, mapDispatchToProps)(Form);
