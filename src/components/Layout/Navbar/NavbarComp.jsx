import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PersonLinesFill } from "react-bootstrap-icons";
import logoZE3D from "../../../Assets/img/logoZE3D.png";
import "./Navbar.css";
import CartWidget from "../../CartWidget/CartWidget";

import { AuthCtxt } from "../../../context/AuthContext";


const NavbarComp = () => {
  const navigate = useNavigate();
  const {user,logout} = useContext(AuthCtxt);
  
  const handleLogout = async () =>{
    await logout();
    navigate("/login");
  }


  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand className="fw-bold title-brand">
            <img
              alt=""
              src={logoZE3D}
              width="40"
              height="45"
              className="img-navbar"
            />{" "}
            Zona Este 3D
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/category/makers" className="nav-link">
              Makers
            </Link>
            <Link to="/category/filamentos" className="nav-link">
              Filamentos
            </Link>
            <Link to="/category/impresoras" className="nav-link">
              Impresoras
            </Link>
            <Nav.Link className="nav-link" href="#footer">
              Contacto
            </Nav.Link>
            <Link to="/cart">
              <CartWidget className="nav-cart"></CartWidget>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {
          user 
          ? (
          <Nav className="ml-auto" >
          <NavDropdown title={< PersonLinesFill size={30}/>}>
            <NavDropdown.Item href="/" className="text-decoration-none">Mis pedidos</NavDropdown.Item>
            <NavDropdown.Item href="/" className="text-decoration-none">Perfil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout} className="text-danger">Cerrar sesión</NavDropdown.Item>
          </NavDropdown>
          </Nav>)
          : (
          <div>
            <Link to="/login" className="btn btn-primary mx-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-success mx-2">
              Register
            </Link>
          </div>)
        }
        
   
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
