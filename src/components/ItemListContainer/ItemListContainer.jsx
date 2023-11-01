import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate} from "react-router-dom";

import { db } from "../../firebase/credentials";
import { collection, getDocs, query, where } from "firebase/firestore";

import { CartStateContext } from "../../context/CartContext";

import './ItemListContainer.css'
import ItemList from "../ItemList/ItemList";
import SpinnerLoader from "../SpinnerLoader/SpinnerLoader";
import SearchBar from './../SearchBar/SearchBar';
import Container from "react-bootstrap/Container";

const ItemListContainer = () => {
  const navigate = useNavigate();
  
  const [allProducts, setAllProducts] = useState([]);
  const { listItems, setListItems } = useContext(CartStateContext);
  const [searchTerm, setSearchTerm] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  const { idCategory } = useParams();

  const getProducts = async() => {
    const collectionName = "products";
    //Referencia a la coleccion 'products'
    const productsRef = collection(db, collectionName); 

    //Nos traemos los productos de las categorías por las que naveguemos
    const categoryQuery = idCategory ? query(productsRef, where("categoria", "==", idCategory)) : productsRef;

    //Obtenemos los docs de todos los productos y formateamos para trabajarlo más comodo
    const allDocs = await getDocs(productsRef);
    const allproductListFormat = allDocs.docs.map((product) => ({id: product.id,...product.data(),}));

    //Obtenemos los docs de los productos dependiendo de la categoría y formateamos para trabajarlo más comodo
    const categoryDocs = await getDocs(categoryQuery); 
    const productListFormat = categoryDocs.docs.map((product) => ({id: product.id,...product.data(),}));

    setAllProducts(allproductListFormat); //Acá siempre vamos a tener todos los productos
    setListItems(productListFormat); //Acá vamos a tener el listado de productos dependiendo de las busquedas o categorías
    setIsLoading(false);

    if(productListFormat.length === 0){
      navigate('/not-found')
    }
  }
  
  const handleSearch = (e) => {
    const term = e.target.value;
    if(term.length === 0){ //Si en el input no tengo nada escrito siempre me muestra todos los productos
      setListItems(allProducts);
    }
    setSearchTerm(term);
  }
  const handleSubmit = () => {
    if(searchTerm){ //Si el termino que ingreso existe filtramos siempre en todos los productos y lo seteamos en el listado
      const filteredProducts = allProducts.filter(product =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setListItems(filteredProducts);
    }else{ //sino muestro todos los productos
      setListItems(allProducts);
    }
    
  }
  useEffect(() => {
    getProducts()
    setIsLoading(true);
  },[idCategory])

  
  return (
    <Container className="container" style={{ marginTop: idCategory ? "6rem" : "2rem", marginBottom: "5rem" }}>
       <nav aria-label="breadcrumb" className="bg-nav rounded mb-4">
        <h2 className="text-white fw-bold text-center p-3" aria-current="page">
          NUESTROS PRODUCTOS PARA VOS
        </h2>
      </nav>
      
      <SearchBar
        title="Buscar productos"
        handleSearch={handleSearch} 
        handleSubmit={handleSubmit}
        msg="Buscar productos, marcas y más..." 
      />
    
      {isLoading ? <SpinnerLoader /> : <ItemList items={listItems} />}
    </Container>
  );
};
export default ItemListContainer;
