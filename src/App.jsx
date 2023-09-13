
import './App.css'

import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
function App() {
  

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda de Impresión 3D!"/>
    </div>
  )
}

export default App
