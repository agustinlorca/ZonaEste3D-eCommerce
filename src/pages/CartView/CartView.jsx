import { useContext} from "react";
import { CartStateContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import Layout from "./../../components/Layout/Layout";
import { ShopWindow, Trash3, X } from "react-bootstrap-icons";

import { addDoc, collection,serverTimestamp} from 'firebase/firestore';
import { db } from "../../db/db";

import Swal from 'sweetalert2';

const CartView = () => {
  const { cartList, deleteCartItem, removeCartList,calcTotalQuantity,calcTotalPrice,subTotal } = useContext(CartStateContext);
 
  const sendOrder = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Ingresa tus datos',
      html:
        '<input id="nombre" class="swal2-input" placeholder="Nombre y apellido">' +
        '<input id="telefono" class="swal2-input" placeholder="Teléfono">' +
        '<input id="email" class="swal2-input" placeholder="Email">' +
        '<input id="email-2" class="swal2-input" placeholder="Confirmar email">',
      confirmButtonText: 'Enviar',
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const email2 = document.getElementById('email-2').value;
        
        if (!nombre || !telefono || !email || !email2) {
          Swal.showValidationMessage('Por favor completa todos los campos');
        }

        if (email !== email2) {
          Swal.showValidationMessage('Los correos electrónicos no coinciden');
        }
        return {
          nombre,
          telefono,
          email,
        };
      },
    });

    if (formValues) {
      const { nombre, telefono, email } = formValues;

      const order = {
        buyer: {nombre,telefono, email },
        items: cartList.map((itemCart) => ({
          id: itemCart.id,
          nombre: itemCart.nombre,
          precio: itemCart.precio,
          cantidad: itemCart.qty,
        })),
        cantidadProductos: calcTotalQuantity(),
        total: calcTotalPrice(),
        fecha: serverTimestamp(),
      };
      const ordersCollection = collection(db,"orders");
      const orderDoc = await addDoc(ordersCollection,order);
      removeCartList();
      
     
      Swal.fire({
        title: 'Pedido generado exitosamente',
        footer: `N° de orden: <strong>${orderDoc.id}</strong>`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } 
  };

  // Si el carrito está vacío
  if (!cartList.length) {
    return (
      <Layout>
        <section style={{marginTop:"7rem", marginBottom:"4rem"}}>
          <div className="container">
            <div className="row">
              {/* Cart */}
              <div className="col-lg-9 mb-3">
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
              <div className="col-lg-3 mb-3">
                <div className="card shadow-0 border">
                  <div className="card-body">
                    <div className="text-center">
                      <p className="mb-4 fs-5 fw-bold">Resumen de compra</p>
                    </div>
                    <hr />
                    <div className="text-center">
                      <p className="mb-2">
                        Acá vas a ver el resumen de tu compra una vez que
                        agregues productos
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


  // Si el carrito no está vacío
  return (
    <Layout>
      <section style={{marginTop:"7rem", marginBottom:"7rem"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mb-3">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title text-primary text-bold">Mi carrito de compras</h4>
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
                              <Link to={`/item/${cartItem.id}`} className="mb-3">
                                {cartItem.nombre}
                              </Link>
                              <p className="pt-2">Stock: {cartItem.stock}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                      <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className="pt-3">
                          <p className="h6">
                           Cantidad: {cartItem.qty}
                          </p>
                          
                        </div>
                      </div>
                      <div className="col-lg-2 col-sm-6 col-8 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                        <div className="pt-3">
                          <p className="h6">
                            Subtotal: $ {subTotal(cartItem.id).toLocaleString("es-ES")}
                          </p>
                          <small className="text-muted text-nowrap">
                           
                            $ {cartItem.precio.toLocaleString("es-ES")} / por unidad
                          </small>
                        </div>
                      </div>

                      <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2 text-center">
                        <div className="float-md-end pt-3">
                          <button
                            className="btn btn-light"
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
                    className="btn btn-light"
                    onClick={() => removeCartList()}
                  >
                    <Trash3 color="royalblue" /> Limpiar carrito
                  </button>
                </div>
              </div>
            </div>
            
            {/* Resumen */}
            <div className="col-lg-3 mb-3">
              <div className="card shadow-0 border">
                <div className="card-body">
                  <div className="text-center">
                    <p className="mb-4 fs-5 fw-bold">Resumen de compra</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Cantidad total:</p>
                    <p className="mb-2 fw-bold">{calcTotalQuantity()}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Envío:</p>
                    <p className="mb-2 fw-bold">-</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Desc:</p>
                    <p className="mb-2 fw-bold">-</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total</p>
                    <p className="mb-2 fw-bold">$ {calcTotalPrice().toLocaleString("es-ES")}</p>
                  </div>

                  <div className="mt-3">
                    <button className="btn btn-success w-100 border mt-2" onClick={sendOrder}>
                    Terminar mi compra
                    </button>
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
