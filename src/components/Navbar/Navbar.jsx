import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoZE3D from "../../Assets/img/logoZE3D.png";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget"
import "../CartWidget/cartWidget.css"
const NavbarComp = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold title-brand">
          <img
            alt=""
            src={logoZE3D}
            width="40"
            height="45"
            className="img-navbar"
          />{" "}
          <a className="title-brand" href="#">
            Zona Este 3D
          </a>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link" href="#home">Inicio</Nav.Link>
            <Nav.Link className="nav-link" href="#link">Productos</Nav.Link>
            <Nav.Link className="nav-link" href="#link">Catálogo</Nav.Link>
            <Nav.Link className="nav-link" href="#link">Contacto</Nav.Link>
            <CartWidget className="nav-cart"></CartWidget>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
