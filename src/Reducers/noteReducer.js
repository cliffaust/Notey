const initialState = {
  notes: [],
  note: [],
  showModal: false,
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      console.log(action.payload);
      return { ...state, notes: [...state.notes, action.payload] };

    case "DELETE_NOTE":
      let id = action.payload.id;
      let noteAfterDelete = state.notes.filter((note) => note.id !== id);

      return { notes: noteAfterDelete };

    case "SINGLE_NOTE":
      return { ...state, note: action.payload };

    case "SHOW_MODAL_VALUE":
      return { ...state, showModal: action.payload };

    case "UPDATE_NOTE":
      let update_id = action.payload.id;
      const updatednoteInfo = action.payload;
      const noteAfterUpdate = state.notes.map((note) => {
        if (note.id === update_id) {
          return updatednoteInfo;
        }

        return note;
      });

      console.log("update", noteAfterUpdate);

      return { notes: noteAfterUpdate };

    default:
      return state;
  }
};

export default noteReducer;
