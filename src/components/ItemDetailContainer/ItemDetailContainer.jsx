import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";

import {db} from "../../db/db"
import { doc, getDoc } from "firebase/firestore";

import Layout from "../Layout/Layout";
import ItemDetail from "../ItemDetail/ItemDetail";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import NotFound from "../../pages/NotFound/NotFound";

const ItemDetailContainer = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { idItem } = useParams();

  const getProduct = async() => {
    const collectionName = "products";
    const productRef = doc(db,collectionName,idItem)
    const response = await getDoc(productRef);
    
    if(response.exists()) {
      const productFormat = {id: response.id, ...response.data()}
      setProduct(productFormat)
      setIsLoading(false)
    }else{
      setIsError(true)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct()
  }, [idItem]);

 
  if(isError) {
    return (
      <NotFound message="El producto al que intentas acceder no existe en nuestra base de datos."/>
    )
  }
  return (
    <Layout>
      <div className="container" style={{ marginTop: "6rem", marginBottom: "5rem" }}>
        {isLoading ? <SpinnerLoader /> : <ItemDetail item={product} />}
      </div>
    </Layout>
  );
};

export default ItemDetailContainer;
