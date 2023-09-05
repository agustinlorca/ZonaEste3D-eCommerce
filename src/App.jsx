
import './App.css'

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  

  return (
    <div>
      <Navbar></Navbar>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de Impresión 3D!"></ItemListContainer>
    </div>
  )
}

export default App
