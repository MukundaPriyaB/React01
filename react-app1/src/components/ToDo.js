import { useState } from "react";
import Modal from "./Modal";
import BackDrop from "./BackDrop";

function ToDo(props) {
  const [modalIsOpen, setModalState] = useState(false);
  function deleteHandler() {
    setModalState(true);
  }
  function closeDeleteHandler() {
    setModalState(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeDeleteHandler} onConfirm={closeDeleteHandler} />
      )}
      {modalIsOpen && <BackDrop onCancel={closeDeleteHandler} />}
    </div>
  );
}

export default ToDo;
