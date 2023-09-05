import cartIcon from "../../Assets/img/cart.svg";
const CartWidget = () => {
  return(
    <div className="cart-widget badge">
        <img src={cartIcon} width="35" height="35" ></img>
        <span className="cart-count">7</span>
    </div>
  )
};
export default CartWidget;
