import React from "react";
import "./ContenedorResultados.css"
import logoUnder from "./LUnderground.png";
import Resultado from "./Resultado/Resultado";

function ContenedorResultados(){
    return(
    <div className="o-container-results">
        <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"} 
        cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado>

        <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"} 
        cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado>

        <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"} 
        cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado>

        <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"} 
        cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado>

        <Resultado logo={logoUnder} nombre={"Nombre emprendiemiento"} 
        cat={"Comidas y bebidas"} contacto={"3003071554"} des={"Emprendimiento dedicado a la venta de Cocteles"}></Resultado>
    </div>
    );
}

export default ContenedorResultados;