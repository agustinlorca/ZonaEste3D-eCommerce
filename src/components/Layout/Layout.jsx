
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{marginTop:"4.5rem"}}>{children}</div>
      <Footer/>
    </>
  );
};
export default Layout;
