import React from "react";
import Footer from "./Componets/Footer/Footer";
import Redes from "./Componets/Footer/RedesSociales/Redes";
import Nav from "./Componets/Nav/Nav";
import BannerB from "./BanerBusqueda.png"
import './Busqueda.css';
import Buscador from "./Componets/Busqueda/Buscador/Buscador";
import Filtros from "./Componets/Busqueda/Filtros/Filtros";
import ContenedorResultados from "./Componets/Busqueda/ContenedorResultados/ContenedorResultados";

function Busqueda() {
    return(
        <div className="o-Busqueda">
            <nav class="o-nav">
                <Nav></Nav>
            </nav>
            <header>
                <div className="o-banner-busqueda">
                    <img className="o-img-banner" src={BannerB} alt="Busuqueda Little Market" />
                </div>
                <Buscador></Buscador>
            </header>
            <div className="o-busqueda-container">
                <Filtros cat={"Todos"}></Filtros>
                <ContenedorResultados></ContenedorResultados>
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

export default Busqueda;