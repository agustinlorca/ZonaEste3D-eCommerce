import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import { CartStateContext } from "../../context/CartContext";
import { db } from "../../db/db";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const { listItems, setListItems } = useContext(CartStateContext);

  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  const getProducts = async() => {
    const collectionName = "products";
    const productQuery = categoryId 
      ? query(collection(db, collectionName), where("categoria", "==", categoryId)) 
      : collection(db, collectionName);

    const response = await getDocs(productQuery);
    const productListFormat = response.docs.map((product) => (
      {id: product.id,...product.data(),}
      )
    );
  
    setListItems(productListFormat);
    setIsLoading(false);
  }

  useEffect(() => {
    getProducts()
    window.scrollTo(0, 0);
    setIsLoading(true);
  },[categoryId])

  useEffect(() => {
    setListItems([]);
  },[])

  return (
    <div className="container" style={{ marginTop: categoryId ? "6rem" : "2rem", marginBottom: "5rem" }}>
      
      <div className="tracking-in-expand">
        <h2>{greeting}</h2>
      </div>

      {categoryId !== undefined && (
        <div className="tracking-in-expand">
          <h2>Categoría {categoryId}</h2>
        </div>
      )}
      {isLoading ? <SpinnerLoader /> : <ItemList items={listItems} />}
    </div>
  );
};
export default ItemListContainer;
