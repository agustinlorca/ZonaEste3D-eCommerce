import { useContext } from "react";
import { CartStateContext } from "../../context/CartContext";
import Layout from "./../../components/Layout/Layout";
import { ShopWindow, Trash3, Plus, Dash, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const CartView = () => {
  const { cartList, deleteCartItem, removeCartList } =
  useContext(CartStateContext);

  if (!cartList.length) {
    return (
      <Layout>
        <section className="my-5">
          <div className="container">
            <div className="row">
              {/* Cart */}
              <div className="col-lg-9">
                <div className="card border shadow-0">
                  <div className="m-4">
                    <h4 className="card-title text-primary text-bold">
                      Mi carrito de compras
                    </h4>
                  </div>
                  <div className="border-top pt-4 mx-4 mb-4 text-center">
                    <p className="fs-3 fw-bold">
                      Parece que aún no has sumado productos
                    </p>
                    <ShopWindow size={70} color="royalBlue" className="mb-2" />
                    <p className="text-muted fs-5">
                      ¡Empieza un carrito de compras!
                    </p>
                    <Link to="/">
                      <button className="btn btn-primary">
                        Descrubir productos
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* Cart */}
              <div className="col-lg-3">
                <div className="card shadow-0 border">
                  <div className="card-body">
                    <div className="text-center">
                      <p className="mb-4 fs-5 fw-bold">Resumen de compra</p>
                    </div>
                    <hr />
                    <div className="text-center">
                      <p className="mb-2">
                        Acá vas a ver el resumen de tu compra una vez que
                        agregues productos{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Mi carrito de compras</h4>
                   {/* Productos */}
                  {cartList.map((cartItem) => (
                    <div className="row gy-3 mb-2 border-top mt-4" key={cartItem.id}>
                      <div className="col-lg-5">
                        <div className="me-lg-5">
                          <div className="d-flex">
                            <img
                              src={cartItem.imgUrl}
                              className="border rounded me-3"
                              style={{ width: "96px", height: "96px" }}
                              alt={cartItem.nombre}
                            />
                            <div className="pt-3">
                              <Link
                                to={`/item/${cartItem.id}`}
                                className="mb-3"
                              >
                                {cartItem.nombre}
                              </Link>
                              <p className="pt-2">Stock: {cartItem.stock}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                       {/* ItemCount */}
                      <div className="col-lg col-sm-6 pt-4">
                        <div className="d-flex input-group">
                          <button className="btn btn-light icon-hover-danger">
                            <Dash color="royalblue" />
                          </button>
                          <button className="btn btn-light icon-hover-danger">
                            {cartItem.qty}
                          </button>
                          <button className="btn btn-light icon-hover-danger">
                            <Plus color="royalblue" />
                          </button>
                        </div>
                      </div>
                      

                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className="pt-3">
                          <p className="h6">
                            Subtotal: $ {cartItem.precio * cartItem.qty}{" "}
                          </p>
                          <small className="text-muted text-nowrap">
                            {" "}
                            $ {cartItem.precio} / por unidad{" "}
                          </small>
                        </div>
                      </div>

                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                        <div className="float-md-end pt-3">
                          <button
                            className="btn btn-light icon-hover-danger"
                            onClick={() => deleteCartItem(cartItem.id)}
                          >
                            <X size="20" color="red" /> Eliminar
                          </button>
                        </div>
                      </div>
                      
                    </div>
                   
                  ))}
                   {/* Productos */}
                </div>

                <div className="border-top pt-4 mx-4 mb-4 text-center">
                  <button
                    className="btn btn-light icon-hover-danger"
                    onClick={() => removeCartList()}
                  >
                    <Trash3 color="royalblue" /> Limpiar carrito
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resumen */}
            <div className="col-lg-3">
              <div className="card shadow-0 border">
                <div className="card-body">
                  <div className="text-center">
                    <p className="mb-4 fs-5 fw-bold">Resumen de compra</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Cantidad productos:</p>
                    <p className="mb-2">-</p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Envío:</p>
                    <p className="mb-2">$-</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total</p>
                    <p className="mb-2 fw-bold">$-</p>
                  </div>

                  <div className="mt-3">
                    <a href="#" className="btn btn-success w-100 shadow-0 mb-2">
                      Terminar mi compra
                    </a>
                    <Link to="/" className="btn btn-light w-100 border mt-2">
                      Seguir Comprando
                    </Link>
                  </div>
                </div>
              </div>
            </div>
           {/* Resumen */}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default CartView;
