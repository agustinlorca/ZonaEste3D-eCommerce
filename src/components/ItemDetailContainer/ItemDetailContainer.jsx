import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import {db} from "../../db/db"
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { itemId } = useParams();
  const navigate = useNavigate();

  const getProduct = async() => {
    const collectionName = "products";
    const productRef = doc(db,collectionName,itemId)
    const response = await getDoc(productRef);
    console.log("antes de formatear",response)
    if(response.exists()) {
      const productFormat = {id: response.id, ...response.data()}
      console.log("despues de formatear",productFormat)
      setProduct(productFormat)
      setIsLoading(false)
    }else{
      navigate('/')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct()
  }, [itemId]);

  return (
    <div
      className="container"
      style={{ marginTop: "6rem", marginBottom: "5rem" }}
    >
      {isLoading ? <SpinnerLoader /> : <ItemDetail item={product} />}
    </div>
  );
};

export default ItemDetailContainer;
