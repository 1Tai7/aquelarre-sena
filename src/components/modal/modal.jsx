import { useState } from "react";
import "./modal.css"

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [text, setText] = useState("");

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    console.log("Título:", title);
    console.log("Etiqueta:", tag);
    console.log("Texto:", text);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Abrir Modal</button>
      {isOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <div className="input-info-container">
              <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                placeholder="Etiqueta #"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
            </div>
            <div className="box-text">
              <textarea
                placeholder="¿Qué nos quieres contar?"
                name="create-text-box"
                id="create-text-box"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <button onClick={handleSubmit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
