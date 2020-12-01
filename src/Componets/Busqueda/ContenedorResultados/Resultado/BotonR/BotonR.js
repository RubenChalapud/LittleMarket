import React  from "react";
import "./BotonR.css"

function BotonesR(props){
    return(
        <a className="o-links" href={props.url}><button>Visitar</button></a>
    );
}

function BotonR(){
    return(
        <div className="o-botonesR-container">
            <BotonesR url={url}></BotonesR>
        </div>
    );
}
export default BotonR;