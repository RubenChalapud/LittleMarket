import Nav from "./Componets/Nav/Nav.js"
import Footer from "./Componets/Footer/Footer.js"
import Redes from "./Componets/Footer/RedesSociales/Redes.js"
import './App.css';
import Banner from "./Banner.png"
import BotonesIncio from "./Componets/Inicio/Botones-Inicio/Botones-Inicio.js";
import ContenedorCard from "./Componets/Emprendimientos/ContenedorCard/ContenedorCard.js";
import "./Componets/Perfil/TarjetaPerfil/TarjetaPerfil.css"
import OfertasInicio from "./Componets/OfertasInicio/OfertasInicio.js";
import Inicio from "./Inicio.js";
import Emprendimientos from "./Emprendimientos.js";
import Perfil from "./Perfil.js";
import Busqueda from "./Busqueda.js";
import Construccion from "./Construccion.js";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <Router>     
      <Switch>
        <Route path="/" exact component={Inicio}/>
        <Route path="/emprendimientos" exact component={Emprendimientos}/>
        <Route path="/perfil" exact component={Perfil}/>
        <Route path="/busqueda" exact component={Busqueda}/>
        <Route path="/construccion" exact component={Construccion}/>
      </Switch>
    </Router>
  );
}

export default App;
