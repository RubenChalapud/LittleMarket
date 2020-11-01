import React  from "react";
import "./Info.css"

function Info(props){
    return <p className="o-info"> {props.texto} </p>
}

function Informacion(){
    return(
        <div className="o-info-container">
             <p className="o-info o-strong">LittleMarket</p>
            <Info texto="Contacto: contacto@littlemarket.com"/>
            <Info texto="Tel: +57 300 307 17-54"/>
            <Info texto="Santiago de Cali - Valle del Cauca "/>
        </div>
    );

}
export default Informacion;