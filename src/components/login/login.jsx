import { useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import "./../register/register.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const validarFormulario = (event) => {
    event.preventDefault();
    // Aquí puedes agregar lógica de validación.
    setSuccess(true);
    setTimeout(() => {
      navigate("/"); // Cambia '/destino' por la ruta a la que quieras redirigir
    }, 1000);
  };

  const recuperarContrasena = (event) => {
    event.preventDefault();
    // Lógica para la recuperación de contraseña.
    console.log("Recuperar contraseña clickeado");
  };

  return (
    <>
      <Header />
      <section className="register-body">
        <section className="body-register">
          <h2>Iniciar Sesión</h2>
          <div className="container-avatares">
            <span id="avatar-seleccionado"></span>
            <input type="hidden" id="avatar-guardado" />
          </div>
          <form
            className="form-register"
            action="#"
            method="post"
            onSubmit={validarFormulario}
          >
            <label htmlFor="alias">Alias:</label>
            <input type="text" id="alias" name="alias" required />

            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required />

            <button type="submit">
              <strong>Entrar</strong>
            </button>
            <a href="#" onClick={recuperarContrasena}>
              Recuperar Contraseña
            </a>
          </form>
          {success && <p>Inicio Exitoso!</p>}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Login;
