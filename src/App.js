import Form from "./components/Form";
import NoteList from "./components/NoteList";
import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div className="main-container">
        <Form></Form>
        <NoteList
          openModal={openModal}
          showModal={showModal}
          closeModal={closeModal}
        ></NoteList>
      </div>
    </div>
  );
}

export default App;
