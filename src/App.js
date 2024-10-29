import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import meli from './img/mercadolibre.jpg';
import Rutas from './rutas/Rutas';

import BarraNav from './componentes/BarraNav';


function App() {

  return (
    <Router>
      <h1>Mercadito Libre</h1>
      <div className="App">
    <BarraNav />
        <img src={meli} className="AppLogo" alt="Cartel de mercadolibre"/> 
      </div>
      <Rutas/>
      
    </Router>
  );
}

export default App;


