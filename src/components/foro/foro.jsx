import "./foro.css";
import { useNavigate } from "react-router-dom";

const Foro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/post");
  };
  return (
    <section>
      <h2>Foro</h2>
      <div className="post-home-container">
        <div className="header-post">
          <h3>Titulo</h3>
          <h4>@usuario</h4>
        </div>
        <p>parrafo</p>
        <div className="hashtag-button">
          <span>#hola</span>
          <a onClick={() => handleClick()}>
            Entrar al post
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="34"
              height="34"
              strokeWidth="2"
            >
              {" "}
              <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"></path>{" "}
              <path d="M6.5 12h14.5"></path>{" "}
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Foro;
