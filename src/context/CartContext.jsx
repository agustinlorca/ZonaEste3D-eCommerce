import { useState,createContext } from "react";

export const CartStateContext = createContext();

const CartContext = ({ children }) => {
  
    const [listItems, setListItems] = useState([])
    const [cartList, setCartList] = useState([])
    const [totalPrice, setTotalPrice] = useState([])

    const addToCart = (product, quantity) =>{
      const isInCart = cartList.find(cartItem => cartItem.id === product.id)
      
      if(isInCart){
        const updateItemQty = cartList.map(
          cartItem => cartItem.id === product.id
          ? {...cartItem, qty: (cartItem.qty + quantity) <= cartItem.stock ? (cartItem.qty + quantity) : (cartItem.stock)}
          : cartItem
        )
        setCartList(updateItemQty)
        
      }else{
        setCartList([...cartList,{...product, qty: (quantity <= product.stock) ? quantity : product.stock}])
      }
    }
    const deleteCartItem = (idProduct) => {
      setCartList(cartList.filter(cartItem => cartItem.id !== idProduct))
    }
      
    const removeCartList = () => {
      setCartList([])
    }

    const calcItemsQty = () => {
      return cartList.reduce((total, item) => total + item.qty, 0);
    } 
  return (
    <CartStateContext.Provider value={{listItems, setListItems, cartList, addToCart, deleteCartItem, removeCartList,calcItemsQty,totalPrice}}>
        {children}
    </CartStateContext.Provider>);
};

export default CartContext;
