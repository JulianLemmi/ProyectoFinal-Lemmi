import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
function App() {
  
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"HOLA MUNDO"}/>
    </>
  )
}

export default App
