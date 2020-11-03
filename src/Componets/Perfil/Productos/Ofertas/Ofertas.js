import React from "react";
import imgOferta1 from "./Oferta1.png";
import imgOferta2 from "./Oferta2.png";

function Ofertas(){
    return(
    <div className="o-ofertas o-ofertas-app">
        <img src={imgOferta1} alt= "Imagen Oferta 1" className="o-img-oferta"></img>
        <img src={imgOferta2} alt= "Imagen Oferta 2" className="o-img-oferta"></img>
    </div>
    );
}

export default Ofertas;