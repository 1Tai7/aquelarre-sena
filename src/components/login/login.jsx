import { useState } from "react";
import "./../register/register.css";
import { useNavigate } from "react-router-dom";
import logo from "./../../assets/logo-aquellare-app.png";

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

  return (
    <>
      <section className="register-body">
        <section className="body-register">
          <h2>Iniciar Sesión</h2>
          <div className="container-avatares">
            <div className="container-avatares_avatar">
              <img src={logo} alt="logo-aquelarre" />
            </div>
          </div>

          <form
            className="form-register"
            action="#"
            method="post"
            onSubmit={validarFormulario}
          >
            <label htmlFor="email">email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required />

            <button type="submit">
              <strong>Entrar</strong>
            </button>
            <a onClick={() => navigate("/register")}>Aun no tengo cuenta</a>
          </form>
          {success && <p>Inicio Exitoso!</p>}
        </section>
      </section>
    </>
  );
};

export default Login;
