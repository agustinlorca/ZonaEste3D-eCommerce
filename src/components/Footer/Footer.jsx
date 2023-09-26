import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Facebook, Instagram, Tiktok, Whatsapp, Youtube } from "react-bootstrap-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer py-4" id="footer">
      <Container>
        <Row>
          <Col md={6} className="mb-3">
            <h3 className="text-center">Acerca de Nosotros</h3>
            <p>
              Somos una tienda apasionada en el mundo de la impresión 3D,
              comprometida en ofrecer soluciones creativas y personalizadas para
              tus proyectos. Desde nuestro inicio, nos hemos destacado por
              nuestra dedicación a la excelencia y la atención meticulosa a los
              detalles.
            </p>

            <p>
              Nuestro equipo de expertos en diseño y tecnología 3D trabaja
              incansablemente para convertir tus ideas en realidad. Ya sea que
              necesites prototipos de alta calidad, piezas personalizadas o
              cualquier otro tipo de impresión en 3D, estamos aquí para cumplir
              con tus requerimientos.
            </p>
            <p>
              Gracias por confiar en nosotros para tus proyectos de impresión
              3D. Esperamos tener el privilegio de trabajar contigo y ayudarte a
              alcanzar tus objetivos.
            </p>

            <div className="d-flex justify-content-center">
              <a
                
                href="https://www.facebook.com/zonaeste3d"
                target="_blank"
                style={{ marginRight: "20px" }}
              >
                <Facebook size={30} color="royalblue"/>
              </a>
              <a
                href="https://www.instagram.com/zonaeste3d"
                target="_blank"
                style={{ marginRight: "20px" }}
              >
                <Instagram size={30} color="red"/>
              </a>
              <a
                href="https://www.tiktok.com/@zonaeste3d"
                target="_blank"
                style={{ marginRight: "20px" }}
              >
                <Tiktok size={30} color="black"/>
              </a>
              <a
                href="https://wa.me/message/C2LTSWXKD6LPP1"
                target="_blank"
                style={{ marginRight: "20px" }}
              >
                <Whatsapp size={30} color="green"/>
              </a>
              <a href="https://www.youtube.com/@zonaeste3d" target="_blank">
                <Youtube size={30} color="red"/>
              </a>
            </div>
          </Col>

          {/* Sección 5: Formulario de Contacto */}
          <Col md={5}>
            <h3 className="text-center">Contacto</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Tu mensaje" />
              </Form.Group>
              <Container className="text-center">
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
