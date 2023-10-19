import { useState,createContext } from "react";

export const CartStateContext = createContext();

const CartContext = ({ children }) => {
  
    const [listItems, setListItems] = useState([])
    const [cartList, setCartList] = useState([])

    //Función para añadir un producto al carrito
    const addToCart = (product, quantity) =>{
      const productInCart = cartList.find((cartItem) => cartItem.id === product.id);

      if (productInCart){
        const updatedCartList = cartList.map((cartItem) =>
        cartItem.id === product.id
        ? { ...cartItem, qty: cartItem.qty + quantity}
        : cartItem);
        setCartList(updatedCartList);
      }else {
        setCartList([...cartList,{...product, qty: (quantity <= product.stock) ? quantity : product.stock}])
      }
    }

    //Función para eliminar un producto del carrito mediante su id
    const deleteCartItem = (idProduct) => setCartList(cartList.filter(cartItem => cartItem.id !== idProduct))
  
    //Función para limpiar todo el carrito
    const removeCartList = () => setCartList([])

    //Funcion para obtener la cantidad actual que hay de un producto en el carrito
    const getCurrentQuantity = (idProduct) => {
      const productInCart = cartList.find(cartItem => cartItem.id === idProduct);
      return productInCart ? productInCart.qty : 0;
    };

    //Funcion para calcular el monto de un producto en el carrito
    const subTotal = (idProduct) => {
      const productInCart = cartList.find(cartItem => cartItem.id === idProduct);
      return productInCart ? productInCart.qty*productInCart.precio : 0;
    };

    //Función para calcular la cantidad total de productos que tenemos en el carrito
    const calcTotalQuantity = () =>  cartList.reduce((total, cartItem) => total + cartItem.qty, 0);
    
    //Función para calcular el monto total que tenemos en el carrito
    const calcTotalPrice = () => cartList.reduce((total, cartItem) => total + cartItem.precio * cartItem.qty, 0);
    

    const contextData = {
      listItems,
      setListItems,
      cartList,
      addToCart,
      deleteCartItem,
      removeCartList,
      calcTotalQuantity,
      calcTotalPrice,
      getCurrentQuantity,
      subTotal
    }
  return (
    <CartStateContext.Provider value={contextData}>
      {children}
    </CartStateContext.Provider>);
};
export default CartContext;
