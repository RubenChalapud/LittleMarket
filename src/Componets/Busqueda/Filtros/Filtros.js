import React from "react";
import "./Filtro.css"

function Filtros({cat}){
    return(
    <div className="o-filtros">
        <h2 className="o-filtros-title">Filtros de Busqueda</h2>
        <p className="o-categoria-filtro">{cat}</p>
    </div>
    );
}

export default Filtros;