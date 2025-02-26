import { useState } from "react";
import "./modal.css";
import { createPost } from "../../firebase/post";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [text, setText] = useState("");
  const user = JSON.parse(sessionStorage.getItem("data") || {});

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    let newErrors = {};
    console.log(newErrors);
    if (!title) newErrors.title = "Agregue un titulo";
    if (!text) newErrors.text = "Agrega un mensaje";
    if (!tag) {
      newErrors.tag = "Agregue Tags";
    } else if (!tag?.includes(",")) {
      newErrors.tag = "separalos por , #tag, #example";
    } else if (!tag?.includes("#")) newErrors.tag = "usa #";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      const data = await createPost({
        userId: user.uid,
        autor: user.displayName,
        title: title,
        tags: tag,
        text: text,
      });
      if (data) {
        setErrors({});
        setSuccess(true);
        location.reload();
        handleClose();
      }
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Crear Post</button>
      {isOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              x
            </span>

            <div className="input-info-container">
              <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <p className="errors">{errors?.title}</p>
              <input
                type="text"
                placeholder="#tag, #example, #horror"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <p className="errors">{errors?.tag}</p>
            </div>
            <div className="box-text">
              <textarea
                placeholder="¿Qué nos quieres contar?"
                name="create-text-box"
                id="create-text-box"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
              <p className="errors">{errors?.text}</p>
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

              {success && <p className="success">Registro exitoso</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
