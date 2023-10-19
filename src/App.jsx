import "./App.css";
import CartContext from "./context/CartContext";
import Navigation from "./routes/Navigation";
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <CartContext>
      <Navigation />
      <ToastContainer />
    </CartContext>
  );
}

export default App;
