import React from "react";
import "./Resultado.css"

function Resultado({logo, nombre, cat, contacto, des}){
    return(
        <div className="o-resultado">
            <div className="o-container-logo-res">
                <img className="o-img-empre" alt="Imagen de Emprendimiento" src={logo}></img>
            </div>
            <div className="o-container-contenido-res">
                <h3 className="o-nombre-emprendiemiento">{nombre}</h3>
                <p className="o-categoria">{cat}</p>
                <div className="o-contacto-container">
                    <span class="material-icons o-icon-contacto">phone</span>
                    <p className="o-contacto">{contacto}</p>
                </div>
                <p className="o-description-res">{des}</p>
            </div>
        </div>
    );
}

export default Resultado;