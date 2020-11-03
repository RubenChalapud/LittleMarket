import Nav from "./Componets/Nav/Nav.js"
import Footer from "./Componets/Footer/Footer.js"
import Redes from "./Componets/Footer/RedesSociales/Redes.js"
import './App.css';
import Banner from "./BannerEmprendimientos.png"
import BotonesIncio from "./Componets/Inicio/Botones-Inicio/Botones-Inicio.js";
import ContenedorCard from "./Componets/Emprendimientos/ContenedorCard/ContenedorCard.js";
import ContenedorCat from "./Componets/Emprendimientos/ContenedorCat/ContenedorCat.js";


function Emprendimientos() {
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
      <div>
        <ContenedorCard></ContenedorCard>
        <ContenedorCard></ContenedorCard>
      </div>
      <div>
        <ContenedorCat></ContenedorCat>
        <ContenedorCat></ContenedorCat>
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

export default Emprendimientos;
