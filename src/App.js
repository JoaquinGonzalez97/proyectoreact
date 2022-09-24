import logo from './logo.svg';
import './App.css';
import  {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './componentes/Navbar'
import inicio from './componentes/paginas/Inicio'
import inicio from './componentes/paginas/Items'


function App() {
  return (
    <div className="App">
        <Router>   
         <Navbar/> 
        </Router>
    </div>
  );
}

export default App;
