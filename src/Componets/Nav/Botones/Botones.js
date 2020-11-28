import React  from "react";
import "./Botones.css"

function Boton(props){
    return(
        <a className="o-links" href={props.url}><span class="material-icons">search</span></a>
    );
}

function Botones(){
    return(
        <div className="o-botones-container">
            <Boton url="busqueda"></Boton>
            <span class="material-icons"> account_circle</span>
        </div>
    );
}
export default Botones;