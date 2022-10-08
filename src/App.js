
import './App.css';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import Navbar from './componentes/Navbar'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
         <Navbar/>
         <ItemListContainer greeting="¡Les damos la bienvenida!"/> 

    </div>
  );
}

export default App;
