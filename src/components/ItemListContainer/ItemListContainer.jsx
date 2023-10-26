import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate} from "react-router-dom";

import { db } from "../../Firebase/credentials";
import { collection, getDocs, query, where } from "firebase/firestore";

import { CartStateContext } from "../../context/CartContext";

import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";


const ItemListContainer = ({ greeting }) => {
  const navigate = useNavigate();
  const { listItems, setListItems } = useContext(CartStateContext);

  const [isLoading, setIsLoading] = useState(true);
  const { idCategory } = useParams();

  const getProducts = async() => {
    const collectionName = "products";
    const productsRef = collection(db, collectionName);
    const categoryQuery = idCategory ? query(productsRef, where("categoria", "==", idCategory)) : productsRef;
    const response = await getDocs(categoryQuery);
    const productListFormat = response.docs.map((product) => (
      {id: product.id,...product.data(),}
      )
    );
    setListItems(productListFormat);
    setIsLoading(false);

    if(productListFormat.length === 0){
      navigate('/not-found')
    }
  }

  useEffect(() => {
    getProducts()
    window.scrollTo(0, 0);
    setIsLoading(true);
  },[idCategory])

  


  return (
    <div className="container" style={{ marginTop: idCategory ? "6rem" : "2rem", marginBottom: "5rem" }}>

      {greeting && <h2 className="tracking-in-expand">{greeting}</h2>}

      {idCategory && <h2 className="tracking-in-expand">Categoría {idCategory}</h2>}

      {isLoading ? <SpinnerLoader /> : <ItemList items={listItems} />}
      
    </div>
  );
};
export default ItemListContainer;
