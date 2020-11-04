import Nav from "./Componets/Nav/Nav.js"
import Footer from "./Componets/Footer/Footer.js"
import Redes from "./Componets/Footer/RedesSociales/Redes.js"
import './App.css';
import Banner from "./Banner.png"
import BotonesIncio from "./Componets/Inicio/Botones-Inicio/Botones-Inicio.js";
import ContenedorCard from "./Componets/Emprendimientos/ContenedorCard/ContenedorCard.js";
import "./Componets/Perfil/TarjetaPerfil/TarjetaPerfil.css"
import OfertasInicio from "./Componets/OfertasInicio/OfertasInicio.js";


function App() {
  return (
    <div className="App">
      <nav class="o-nav">
        <Nav></Nav>
      </nav>
      <header>
        <div className="o-banner">
          <img className="o-img-banner" src={Banner} alt="Little Market" />
        </div>
        <BotonesIncio></BotonesIncio>
      </header>
      <div className="o-container-app">
        <OfertasInicio></OfertasInicio>
      </div>
      <h1 className="o-title-app">Emprendimientos y Productos:</h1>
      <div className="o-container-app">
        <ContenedorCard></ContenedorCard>
        <ContenedorCard></ContenedorCard>
      </div>
      <footer className="o-footer">
        <Footer></Footer>
        <div className="o-redes">
          <Redes></Redes>
        </div>
      </footer>
    </div>
  );
}

export default App;
