import { useContext } from "react";
import { CartStateContext } from "../../context/CartContext";
import Layout from "./../../components/Layout/Layout";
import Table from 'react-bootstrap/Table';
const CartView = () => {
  const { cartList, deleteItemCart, removeCartList } = useContext(CartStateContext);

  if (!cartList.length) {
    return (
      <Layout>
        <h1 className="text-center">No tienes productos en tu carrito</h1>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container my-5">
        <h3 className="text-center">Finalizar mi compra</h3>
      <Table striped bordered hover size="sm" className="mt-3">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio U.</th>
              <th>SubTotal</th>
            </tr>
          </thead>
       
        {cartList.map((itemsCart) => (
          <tbody key={itemsCart.id}>
          <tr>
            <td>{itemsCart.nombre}</td>
            <td>{itemsCart.qty}</td>
            <td>$ {itemsCart.precio}</td>
            <td>$ {itemsCart.precio * itemsCart.qty}</td>
            <td className="text-center"><button className="btn btn-danger" onClick={() => deleteItemCart(itemsCart.id)}>Eliminar</button></td>
          </tr>
        </tbody>
        ))}
        
        </Table>
        <div class="container">
            <div className=" d-flex justify-content-end">
              <button className="btn btn-primary" onClick={() => removeCartList()}>Limpiar carrito</button>
            </div>
        </div>

      </div>
    </Layout>
  );
};

export default CartView;
