import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";


import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/credentials";

import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import OrderDetail from "../OrderDetail/OrderDetail";

import {Container} from "react-bootstrap";

const OrderDetailContainer = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState({});
  const { orderID } = useParams();

  const getOrder = async() => {
    const collectionName = "orders";
    const orderRef = doc(db,collectionName,orderID)
    const response = await getDoc(orderRef);
    
    if(response.exists()) {
      const orderFormat = {id: response.id, ...response.data()}
      setOrder(orderFormat)
      setIsLoading(false)
    }else{
      navigate('/not-found')
    }
  }

  useEffect(() => {
    getOrder()
  }, [orderID]);

  return (
    <Container style={{marginTop:"8rem",marginBottom:"3rem"}}>
      {isLoading ? <SpinnerLoader /> : <OrderDetail order={order} />}
    </Container>
  )
}

export default OrderDetailContainer
