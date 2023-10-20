import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoZE3D from "../../../Assets/img/logoZE3D.png";
import "./Navbar.css";
import CartWidget from "../../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavbarComp = () => {
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
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
