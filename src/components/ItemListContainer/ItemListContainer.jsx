import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../products";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import Layout from "../Layout/Layout";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategory } = useParams();

  const getData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (idCategory) {
          resolve(productos.filter((prod) => prod.categoria === idCategory));
        } else {
          resolve(productos);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    getData().then((res) => {
      setProducts(res);
      setIsLoading(false);
    });
  }, [idCategory]);
  return (
    <div
      className="container my-6"
      style={{ marginTop: "6rem", marginBottom: "5rem" }}
    >
      <div className="tracking-in-expand">
        {greeting && <h2>{greeting}</h2>}
      </div>

      {idCategory !== undefined && (
        <div className="tracking-in-expand">
          <h2>Categoría {idCategory}</h2>
        </div>
      )}
      {isLoading ? <SpinnerLoader /> : <ItemList items={products} />}
    </div>
  );
};
export default ItemListContainer;
