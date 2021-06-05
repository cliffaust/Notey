export function addNote(newNote) {
  return { type: "ADD_NOTE", payload: newNote };
}

export function updateNote(newNote) {
  return { type: "UPDATE_NOTE", payload: newNote };
}

export function deleteNote(newNote) {
  return { type: "DELETE_NOTE", payload: newNote };
}

export function singleNote(newNote) {
  return { type: "SINGLE_NOTE", payload: newNote };
}

export function showModalValue(newNote) {
  return { type: "SHOW_MODAL_VALUE", payload: newNote };
}
