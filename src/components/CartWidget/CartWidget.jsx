import cartIcon from "../../Assets/img/cart.svg";
import Badge from 'react-bootstrap/Badge';
const CartWidget = () => {
  return(
    <div className="position-relative mt-1">
      <img src={cartIcon} width="35" height="35" alt="Cart Icon" />
      <Badge bg="danger" className="position-absolute translate-middle">
        7
      </Badge>
    </div>
  )
};
export default CartWidget;
