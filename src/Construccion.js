import Footer from "./Componets/Footer/Footer.js"
import Redes from "./Componets/Footer/RedesSociales/Redes.js"
import Nav from "./Componets/Nav/Nav.js"
import AboutUs from "./Componets/Perfil/AboutUs/AboutUs.js";
import Productos from "./Componets/Perfil/Productos/Productos.js";
import TarjetaPerfil from "./Componets/Perfil/TarjetaPerfil/TarjetaPerfil.js";
import './Construccion.css';
import Lunder from "./Componets/Perfil/TarjetaPerfil/ImgPerfil/gear.png"

function Construccion(props) {
    return (
      <div className="o-Perfil">
        <nav class="o-nav">
           <Nav></Nav>
        </nav>
        <div className="o-perfil-container-cons">
          <TarjetaPerfil srcimg={Lunder} title="Estamos construyéndo este perfil..." contacto="XXXXXXXX"></TarjetaPerfil>
          <AboutUs description="Estamos construyéndo este espacio..."></AboutUs>     
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
  
  export default Construccion;