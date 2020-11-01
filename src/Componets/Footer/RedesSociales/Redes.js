import React from "react";
import "./Redes.css"
import Instagram from "./instagram.png"
import Facebook from "./facebook.png"

function ImgRedes(props){
    return <div className="o-container-img">
        <img src={props.redes} alt={props.red} className="o-img"/>
        </div>
}

function Redes(){
    return(
        <div className="o-container-redes">
            <ImgRedes redes={Facebook} red="Little Market"></ImgRedes>
            <ImgRedes redes={Instagram} red="@littlemarket"></ImgRedes>
        </div>
    );
}
export default Redes;