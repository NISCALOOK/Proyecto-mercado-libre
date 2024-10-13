import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import meli from './img/mercadolibre.jpg';
import Rutas from './rutas/Rutas';


function App() {

  return (
    <Router>
      <h1>Mercadito Libre</h1>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registro">Registro</Link>
            </li>
            <li>
              <Link to="/loguearse">Loguearse</Link> {/* Cambié 'loggin' por 'loguearse' */}
            </li>
          </ul>
        </nav>
        <img src={meli} className="AppLogo" alt="Cartel de mercadolibre"/> 
      </div>
      <Rutas /> {/* Se encarga de definir las rutas */}
    </Router>
  );
}

export default App;

