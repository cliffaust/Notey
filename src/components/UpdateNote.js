import { React, useState } from "react";
import { connect } from "react-redux";
import { updateNote, showModalValue } from "../actions/noteActions";

const UpdateNote = (props) => {
  const [note, setState] = useState({
    title: props.note.title,
    date: props.note.date,
    note: props.note.note,
  });
  function handleonChange(event) {
    setState({ ...note, [event.target.name]: event.target.value });
  }

  function handleonSubmit() {
    let usernote = { ...note, id: props.note.id };
    props.updateNote(usernote);
    props.showModalValue(false);
  }

  if (props.showModal === true) {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => props.showModalValue(false)}>
            &times;
          </span>
          <div className="form-container update-form">
            <input
              type="text"
              onChange={handleonChange}
              name="title"
              className="input"
              value={note.title}
              placeholder="Title"
            />
            <input
              type="date"
              onChange={handleonChange}
              value={note.date}
              name="date"
              className="input"
              placeholder="Date"
            />
            <textarea
              value={note.note}
              onChange={handleonChange}
              id=""
              cols="30"
              rows="10"
              name="note"
              className="input text-area"
              placeholder="Note"
            ></textarea>
            <button onClick={handleonSubmit} className="update-btn">
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

const mapDispatchToProps = {
  updateNote: updateNote,
  showModalValue: showModalValue,
};

function mapStateToProps(state) {
  return { showModal: state.showModal };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateNote);
