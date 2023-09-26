import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../products";
import ItemDetail from "../ItemDetail/ItemDetail";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const { idItem } = useParams();

  const searchProduct = productos.find((prod) => prod.id === parseInt(idItem));

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setProduct(searchProduct);
      setIsLoading(false);
    }, 2000);
  }, []);

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
