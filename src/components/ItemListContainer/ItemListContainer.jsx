import React, { useState, useEffect, useContext } from "react";
import { useParams} from "react-router-dom";

import { db } from "../../db/db";
import { collection, getDocs, query, where } from "firebase/firestore";

import { CartStateContext } from "../../context/CartContext";

import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import NotFound from "../../pages/NotFound/NotFound";
import Layout from "../Layout/Layout";

const ItemListContainer = ({ greeting }) => {
  const [isError, setIsError] = useState(false);
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
      setIsError(true)
    }
  }

  useEffect(() => {
    getProducts()
    window.scrollTo(0, 0);
    setIsLoading(true);
    setIsError(false)
  },[idCategory])

  
  if(isError) {
    return (
      <NotFound message="La categoría a la que intentas acceder no existe."/>
    )
  }

  return (
    <Layout>
      <div className="container" style={{ marginTop: idCategory ? "6rem" : "2rem", marginBottom: "5rem" }}>
      
      <div className="tracking-in-expand">
        <h2>{greeting}</h2>
      </div>

      {idCategory && 
        <div className="tracking-in-expand">
          <h2>Categoría {idCategory}</h2>
        </div>
      }
      {isLoading ? <SpinnerLoader /> : <ItemList items={listItems} />}
    </div>
    </Layout>
  );
};
export default ItemListContainer;
