import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoZE3D from "../../Assets/img/logoZE3D.png";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget"
import "../CartWidget/cartWidget.css"

const NavbarComp = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar">
      <Container>
        <Navbar.Brand href="/" className="fw-bold title-brand">
          <img
            alt=""
            src={logoZE3D}
            width="40"
            height="45"
            className="img-navbar"
          />{" "}
          Zona Este 3D
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link className="nav-link" href="/">Inicio</Nav.Link>
            <Nav.Link className="nav-link" href="/category/makers">Makers</Nav.Link>
            <Nav.Link className="nav-link" href="/category/filamentos">Filamentos</Nav.Link>
            <Nav.Link className="nav-link" href="/category/impresoras">Impresoras</Nav.Link>
            <Nav.Link className="nav-link" href="#footer">Contacto</Nav.Link>
            <CartWidget className="nav-cart"></CartWidget>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
