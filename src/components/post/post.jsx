import "./post.css"
import Header from "../header/header";
import Footer from "../footer/footer";

const Post = () => {
  return (
    <>
      <Header />
      <section className="body-post-container">
        <div className="post-container">
          <h2>Post</h2>
          <div className="header-post">
            <h3>Titulo</h3>
            <h4>@usuario</h4>
          </div>
          <p>parrafo</p>
          <span>#hola</span>
          <div className="comment-box">
            <input type="text" placeholder="comentar.." />
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
          </div>
          <span className="title-comment">Comentarios</span>
          <div className="user-comment-box">
            <h4>@usuario</h4>
            <p className="paragraph-comment">texto de omentario</p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default Post;
