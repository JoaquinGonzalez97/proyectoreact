
import './App.css';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import Navbar from './componentes/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>    
         <Navbar/>
         <Routes>
         <Route path='/'element={<ItemListContainer greeting="¡Les damos la bienvenida!"/>}/>
         <Route path='/category/:categoryid'element={<ItemListContainer greeting="¡Les damos la bienvenida!"/>}/>
         <Route path='/item/:id' element={<ItemDetailContainer/>}/>
         </Routes>
    </BrowserRouter>    
    
  );
}

export default App;
