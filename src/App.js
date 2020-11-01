import Nav from "./Componets/Nav/Nav.js"
import Footer from "./Componets/Footer/Footer.js"
import Redes from "./Componets/Footer/RedesSociales/Redes.js"
import './App.css';
import Banner from "./Banner.png"
import BotonesIncio from "./Componets/Inicio/Botones-Inicio/Botones-Inicio.js";

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
