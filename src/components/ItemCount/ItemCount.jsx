import { useState, useContext } from "react";
import { CartStateContext } from "../../context/CartContext";
import './ItemCount.css'

const ItemCount = ({ product }) => {
    const { addToCart } = useContext(CartStateContext);
    const [quantity, setQuantity] = useState(1); 
    
    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);

        if (!isNaN(value) && value >= 1) {
            setQuantity(value);
        }
    };

    return (
        <div className="container mb-4 count">
            <div className="row mb-4">
                <div className="col-4">
                    <button className="btn btn-outline-danger w-100" onClick={handleDecrease}>-</button>
                </div>
                <div className="col-4">
                    <input
                        type="number"
                        className="form-control text-center"
                        value={quantity}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-success w-100" onClick={handleIncrease}>+</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-outline-primary w-100" onClick={() => addToCart(product, quantity)}>
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCount;
