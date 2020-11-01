import React  from "react";
import "./Botones-Inicio.css";
import Nosotros from "./nosotros.png"
import Carrito from "./carrito-de-compras 1.png"
import Servicios from "./nuevo-producto 1.png"

function Boton(props){
    return <div className="o-boton">
            <img src={props.url} className="o-img-botones"/>
            <h4 className="o-title-boton">{props.title}</h4>
        </div>
    
}

function BotonesIncio(){
    return(
        <div className="o-botonesinicio-container">
            <Boton url={Nosotros} title="Nosotros"></Boton>
            <Boton url={Carrito} title="Emprendimientos"></Boton>
            <Boton url={Servicios} title="Servicios"></Boton>
        </div>
    );
}
export default BotonesIncio;