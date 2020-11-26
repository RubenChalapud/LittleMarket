import React from "react";
import "./Buscador.css"

function Buscador(){
    return(
        <div className="o-buscador-container">
            <div className="o-buscador">
                <div className="o-filtro-buscador">
                    <p className="o-filtros">Todos</p>
                    <span class="material-icons o-down-icon">keyboard_arrow_down</span>
                </div>
                <div className="o-separador"></div>
                <div className="o-text-buscador">
                    <input className="o-input-search" type="search" id="input-search" placeholder="Buscar en Little Market"></input>
                    <span class="material-icons o-search-icon">search</span>
                </div>
            </div>
        </div>

    );
}

export default Buscador;