import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Banner from "../../components/Banner/Banner";
const Home = () => {
  return (
    <>
      <Banner/>
      <ItemListContainer greeting={"Listado general de productos"} />
    </>
  );
};
export default Home;
