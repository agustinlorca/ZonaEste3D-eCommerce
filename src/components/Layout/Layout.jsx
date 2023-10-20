import NavbarComp from "./Navbar/NavbarComp";
import Footer from "./Footer/Footer";


const Layout = ({ children }) => {
  return (
    <>
      <NavbarComp/>
      <div style={{marginTop:"4.5rem"}}>{children}</div>
      <Footer/>
    </>
  );
};
export default Layout;
