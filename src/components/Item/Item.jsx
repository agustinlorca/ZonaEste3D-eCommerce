import "./Item.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, imgUrl }) => {
  return (
    <Card className="card shadow-drop-2-center">
      <Card.Body className="body-card">
        <Card.Img className="img-card" variant="top" src={imgUrl} />
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>Precio: ${precio}</Card.Text>
        
        <Link to={`/makers/${id}`} className="btn btn-outline-dark">
          Ver detalle
        </Link>
      </Card.Body>
      
    </Card>
  );
};

export default Item;
