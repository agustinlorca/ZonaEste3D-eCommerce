import cartIcon from "../../Assets/img/cart.svg";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartStateContext } from "../../context/CartContext";

const CartWidget = () => {

  const {calcItemsQty} = useContext(CartStateContext)
  
  return (
    <div className="position-relative mt-1">
      <img src={cartIcon} width="35" height="35" alt="Cart Icon" />
      <Badge bg="danger" className="position-absolute translate-middle">
        {calcItemsQty()}
      </Badge>
    </div>
  );
};
export default CartWidget;