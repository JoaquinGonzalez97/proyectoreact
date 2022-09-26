
import './App.css';
import ItemListContainer from './componentes/ItemList/ItemListContainer';
import Navbar from './componentes/Navbar'



function App() {
  return (
    <div className="App">
         <Navbar/>
         <ItemListContainer greeting="¡Les damos la bienvenida!"/> 

    </div>
  );
}

export default App;
