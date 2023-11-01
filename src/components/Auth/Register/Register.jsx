import { useState,useContext } from "react";
import { Link,useNavigate } from "react-router-dom";

import Layout from "../../Layout/Layout";
import "./Register.css";
import { AuthCtxt} from "../../../context/AuthContext";

const Register = () => {
  const {register} = useContext(AuthCtxt);
  const navigate = useNavigate();
  const [user, setUser] = useState({email: '',password: '',})
  const [error, setError] = useState();


  const handleChange = ({target: {name,value}}) => {
    setUser({...user,[name]: value})
  }
  const handleSubmit = async (e) => {
    const {email,password} = user;

    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      setError("Debe completar todos los campos.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    try {
      await register(email,password);
      navigate("/")
    } catch (err) {
      if (err.code === "auth/invalid-email") {
        setError("El correo ingresado no es válido.");
      } else if (err.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres");
      } else if (err.code === "auth/email-already-in-use") {
        setError("El correo ingresado ya se encuentra en uso");
      } else {
        setError("Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde");
      }
    }  
  }
  return (
    <Layout>
      <div className="main-container-register">
        <div className="form-box-register">
          <form className="form-register" onSubmit={handleSubmit}>
            <span className="title">Crear una cuenta</span>
            {error && <span className="error">{error}</span>}
            <div className="form-container-register">
              <input name='email' type="email" className="input" placeholder="Email" onChange={handleChange}/>
              <input name='password' type="password" className="input" placeholder="Contraseña" onChange={handleChange}/>
            </div>
            <button>Registrarme</button>
          </form>
          <div className="form-section-register">
            <p>
             ¿Ya tenés una cuenta? <Link to="/login">Iniciar sesión</Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
